const Appointment = require("../models/Appointment");
const twilioClient = require("../config/twilio");

exports.bookAppointment = async (req, res) => {
  try {
    const {
      patientName,
      mobile,
      date,
      time,
      consultationType,
      doctorName,
      message,
    } = req.body;

    // 🔑 GET USER ID FROM TOKEN
    const userId = req.user.id;

    // ✅ SAVE APPOINTMENT FIRST (ALWAYS)
    const appointment = new Appointment({
      userId,
      patientName,
      mobile,
      date,
      time,
      consultationType,
      doctorName,
      message,
    });

    await appointment.save();

    // 🔐 VERIFIED NUMBER FROM ENV
    const verifiedNumber = process.env.TWILIO_VERIFIED_NUMBER;

    // 📩 SEND SMS ONLY IF NUMBER MATCHES
    if (mobile === verifiedNumber) {
      await twilioClient.messages.create({
        body: `Appointment confirmed for ${patientName} on ${date} at ${time}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: mobile,
      });
      console.log("✅ SMS sent to verified number");
    } else {
      console.log("⚠️ SMS skipped (number not verified):", mobile);
    }

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });

  } catch (error) {
    console.error("Appointment Booking Error:", error);
    res.status(500).json({
      message: "Failed to book appointment",
    });
  }
};

exports.getMyAppointments = async (req, res) => {
  try {
    const userId = req.user.id;

    const appointments = await Appointment.find({ userId })
      .sort({ date: 1, time: 1 });

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Fetch Appointment Error:", error);
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
};
