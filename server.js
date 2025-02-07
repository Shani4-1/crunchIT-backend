require("dotenv").config();
const express = require("express");
const cors = require("cors");
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

// To prevent overwriting production data accidentally, you should condition the { force: true } flag.
const shouldForceSync = process.env.FORCE_DB_SYNC === 'true';

// Function to connect to the database and start the server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected');

        // Sync Database
        await sequelize.sync({ force: shouldForceSync });
        console.log(`Tables have been ${(shouldForceSync ? 'recreated' : 'synced')}.`);

        // Start Server
        const PORT = process.env.PORT || 5001;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
};

startServer();