require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const sequeli\qze = require('./config/dbConfig.js');  // Update path based on location

const sequelize = require("./dbConfig.js");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const calcRoutes = require("./routes/calcRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/calculate", calcRoutes);
app.use("/api/auth", authRoutes);

// Sync Database
sequelize.sync({ force: true }) // WARNING: This will drop and recreate tables
  .then(() => {
    console.log("Tables have been created!");
  })
  .catch(err => {
    console.error("Error syncing database:", err);
  });

  const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('PostgreSQL connected...');
    } catch (err) {
      console.error('Connection error:', err);
    }
  };
  

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
