const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const bcrypt = require('bcrypt')
const sendMail = require('../services/mail/verificationMail');


const generateVerificationToken = () => {
    return Math.random().toString(36).substr(2, 10);
};

exports.signup = async(req, res, next) => {
    console.log("request started" )
    try {
        await User.validate(req.body);
        const user = await User.findOne({email: req.body.email})
        if (user) {
            return next(new createError('user already exists!', 400));
        }

        const verificationToken = generateVerificationToken();
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            password: hashedPassword,
            emailVerificationToken: verificationToken,
            verificationTokenExpiresAt: new Date(Date.now() + 3600000)
        })

        await sendMail.sendVerificationEmail(newUser.email, verificationToken);

        res.status(201).json({
            status: 'success',
            message: 'user registered!',
        })

    } catch (error) {
        next(error);
    }
};

exports.login = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if (!user) {
            return next(new createError('User Not Found!', 404));
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return next(new createError('Invalid Email or Password', 401));
        }

        // if account exist and not verified resend verification email
        if (user.emailVerified === false) {
            const verificationToken = generateVerificationToken();

            user.emailVerificationToken = verificationToken;
            user.verificationTokenExpiresAt = new Date(Date.now() + 3600000);
            await user.save();

            await sendMail.sendVerificationEmail(user.email, verificationToken);
            return next(new createError('Account Not verified! A Verification Email was Sent!', 400));
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged In!',
            user: {
                _id: user._id,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
};

exports.verifyAccount = async(req, res, next) => {
    try {
        const emailVerificationToken = req.params.token;
        const user = await User.findOne({ emailVerificationToken });

        if (!user) {
            return res.status(404).json({ message: 'Invalid verification token' });
        }

        if (user.verificationTokenExpiresAt < Date.now()) {
            return res.status(400).json({ message: 'Verification token has expired' });
        }

        user.emailVerified = true;
        user.emailVerificationToken = null;
        user.verificationTokenExpiresAt = null;
        await user.save();

        res.status(200).json({ message: 'Account verified successfully' });
    } catch (error) {
        next(error)
    }
};
