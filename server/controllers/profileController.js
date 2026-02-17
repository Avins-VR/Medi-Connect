const User = require("../models/user");
const Appointment = require("../models/Appointment");

/* ================= GET PROFILE ================= */
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const upcomingAppointment = await Appointment.findOne({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json({
      user,
      upcomingAppointment,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to load profile" });
  }
};

/* ================= UPDATE PROFILE ================= */
exports.updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Profile update failed" });
  }
};
