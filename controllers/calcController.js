const Calculation = require("../models/Calculations");

exports.calculate = async (req, res) => {
  try {
    const { operation, operands, userId } = req.body;

    if (!operation || !operands || !userId) {
      return res.status(400).json({ message: "Invalid request" });
    }

    let result;
    switch (operation) {
      case "add":
        result = operands.reduce((a, b) => a + b, 0);
        break;
      case "subtract":
        result = operands.reduce((a, b) => a - b);
        break;
      case "multiply":
        result = operands.reduce((a, b) => a * b, 1);
        break;
      case "divide":
        result = operands.reduce((a, b) => (b !== 0 ? a / b : "Error: Division by zero"));
        break;
      default:
        return res.status(400).json({ message: "Invalid operation" });
    }

    const calculation = await Calculation.create({
      operation,
      operands,
      result,
      userId,
    });

    res.json({ result, calculation });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
