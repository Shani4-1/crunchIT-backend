require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const calcRoutes = require("./routes/calcRoutes");
const authRoutes = require("./routes/authRoutes");

// Use routes
app.use("/api/calculate", calcRoutes);
app.use("/api/auth", authRoutes);

// Define Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
