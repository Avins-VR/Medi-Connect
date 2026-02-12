const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* =========================
   REGISTER / SIGNUP
========================= */
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Debug (optional, remove later)
    console.log("REGISTER BODY:", req.body);

    // 🔐 STRONG PASSWORD REGEX
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // 1. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 🔐 STRONG PASSWORD CHECK
    if (!strongPasswordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long",
      });
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "patient",
    });

    // 5. Response
    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

/* =========================
   LOGIN
========================= */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // 3. Create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 4. Response
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
