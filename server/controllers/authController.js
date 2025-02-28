const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const createError = require("../utils/appError");
const bcrypt = require("bcrypt");
const verificationMail = require("../services/mail/verificationMail");
const appointmentMail = require("../services/mail/appointmentMail");
const crypto = require("crypto");

const generateVerificationToken = () => {
  return Math.random().toString(36).substr(2, 10);
};

exports.signup = async (req, res, next) => {
  try {
    await User.validate(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError("user already exists!", 400));
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
      verificationTokenExpiresAt: new Date(Date.now() + 3600000),
    });

    await verificationMail.sendVerificationEmail(newUser.email, verificationToken);

    res.status(201).json({
      status: "success",
      message: "utilisateur enregistré!",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(new createError("Utilisateur introuvable !", 404));
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(new createError("E-mail ou mot de passe invalide", 401));
    }

    // if account exist and not verified resend verification email
    if (user.emailVerified === false) {
      const verificationToken = generateVerificationToken();

      user.emailVerificationToken = verificationToken;
      user.verificationTokenExpiresAt = new Date(Date.now() + 3600000);
      await user.save();

      await verificationMail.sendVerificationEmail(user.email, verificationToken);
      return next(
        new createError(
          "Compte non vérifié ! Un e-mail de vérification a été envoyé !",
          400
        )
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      status: "success",
      token,
      message: "Connecté !",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyAccount = async (req, res, next) => {
  try {
    const emailVerificationToken = req.params.token;
    console.log("user emailVerificationToken", emailVerificationToken);

    const user = await User.findOne({ emailVerificationToken });
    console.log("user details", user);
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    if (user.verificationTokenExpiresAt < Date.now()) {
      return res
        .status(400)
        .json({ message: "Verification token has expired" });
    }

    user.emailVerified = true;
    user.emailVerificationToken = null;
    user.verificationTokenExpiresAt = null;
    await user.save();

    res.status(200).json({ message: "Account verified successfully" });
  } catch (error) {
    next(error);
  }
};

// Forgot Password
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return next(new createError("User not found with this email", 404));
    }

    // Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = Date.now() + 3600000; // Token expires in 1 hour

    await user.save();

    // Create a password reset URL (adjust as needed for your frontend)
    const resetUrl = `reset-password/${resetToken}`;

    // Send password reset email
    await verificationMail.sendPasswordResetEmail(user.email, resetUrl);

    res.status(200).json({
      status: "success",
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Find the user with the valid reset token and check expiration
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return next(new createError("Invalid or expired reset token", 400));
    }

    // Hash the new password and update the user's password
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;

    // Clear the reset token and expiration
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    await user.save();

    res.status(200).json({
      status: "success",
      message: "Password has been reset successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.appointment = async (req, res, next) => {
  try {
    const { userID, formattedSlot } = req.body;

    // Validate input
    if (!userID || !formattedSlot) {
      return res.status(400).json({
        status: "fail",
        message: "User ID and selected slot are required.",
      });
    }

    // Find the user
    const user = await User.findOne({ _id: userID });
    if (!user) {
      return next(new createError("User not found!", 404));
    }

    let isReschedule = false;
    let oldAppointment = null;

    // Check if it's a new appointment or reschedule
    if (user.appointment) {
      isReschedule = true;
      oldAppointment = user.appointment;
    }

    // Update the user's appointment
    user.appointment = formattedSlot;

    // Save the updated user
    const updatedUser = await user.save();

    // Send the appropriate email
    if (isReschedule) {
      await appointmentMail.sendRescheduleAppointmentEmail(
        user.email,
        oldAppointment,
        user.appointment,
        user?.firstname
      );
    } else {
      await appointmentMail.sendAppointmentBookEmail(user.email, user.appointment,user?.firstname);
    }

    // Respond with success
    res.status(200).json({
      status: "success",
      message: isReschedule
        ? "Appointment has been rescheduled successfully!"
        : "Appointment has been booked successfully!",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.appointmentCancel = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return next(new createError("User not found!", 404));
    }
    const appointmentValue = user.appointment;
    user.appointment = null;
    await user.save();
    appointmentMail.sendCancelAppointmentEmail(user?.email, appointmentValue,user?.firstname);

    res.status(200).json({
      status: "success",
      message: "Appointment has been cancelled successfully!",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserData = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({
        status: "fail",
        message: "User ID is required.",
      });
    }

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return next(new createError("User not found!", 404));
    }
    res.status(200).json({
      status: "success",
      message: "User has been fetched successfully!",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};
