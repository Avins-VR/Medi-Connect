const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    consultationType: {
      type: String,
    },
    doctorName: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);
