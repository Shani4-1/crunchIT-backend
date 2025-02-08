const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("POST /api/calculate hit");  // Debugging log
  res.json({ message: "Calculation route working!" });
});

module.exports = router;
