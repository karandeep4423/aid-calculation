const Phone = require("../models/phoneModal");
const createError = require("../utils/appError");

exports.phone = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    // Use findOneAndUpdate with upsert option
    // This will update if a document exists, or create one if it doesn't
    const ph = await Phone.findOneAndUpdate(
      {}, // Empty filter to match any document
      { phone: phoneNumber }, // Update the phone field
      { 
        new: true, // Return the updated document
        upsert: true, // Create a new document if none exists
        setDefaultsOnInsert: true // Apply schema defaults if creating new doc
      }
    );

    res.status(200).json({
      status: "success",
      message: "Phone number updated successfully",
      phone: ph,
    });
  } catch (err) {
    next(err);
  }
};

exports.getPhone = async (req, res, next) => {
  try {
    const phoneNumber = await Phone.findOne();
    if (!phoneNumber) {
      return next(new createError("Phone number not found!", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Phone number fetched successfully",
      phone: phoneNumber,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};
