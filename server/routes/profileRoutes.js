const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

router.get("/me", authMiddleware, getProfile);
router.put("/update", authMiddleware, updateProfile);

module.exports = router;
