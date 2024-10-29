const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: "must contain only alphabetic characters",
    },
    minlength: [2, "Firstname must be at least 2 characters long"],
    maxlength: [50, "Firstname cannot be more than 50 characters long"],
  },
  lastname: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: "must contain only alphabetic characters",
    },
    minlength: [2, "Lastname must be at least 2 characters long"],
    maxlength: [50, "Lastname cannot be more than 50 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: "Invalid format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [10, "Password must be at least 10 characters long"],
    validate: {
      validator: function (value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
      },
      message: "Invalid format",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  phone: {
    type: String,
    required: true,
    // validate: {
    //     validator: function(value) {
    //         return /^(0|\+33)[1-9]\d{8}$/.test(value);
    //     },
    //     message: 'Invalid format'
    // }
  },
  gender: {
    type: String,
    enum: ["Monsieur", "Madame"],
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  emailVerificationToken: String,
  verificationTokenExpiresAt: Date,
  // Added fields for forgot password functionality
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
},{ timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
