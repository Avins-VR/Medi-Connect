const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  getMyAppointments,
} = require("../controllers/appointmentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/book", authMiddleware, bookAppointment);
router.get("/my", authMiddleware, getMyAppointments);

module.exports = router;
