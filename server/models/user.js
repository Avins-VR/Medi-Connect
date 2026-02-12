const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["patient", "doctor"],
      default: "patient",
    },
    sex: String,
    age: String,
    blood: String,
    status: { type: String, default: "Active" },
    phone: String,
    dob: String,
    street: String,
    city: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.User || mongoose.model("User", userSchema);
