module.exports = (sequelize, DataTypes) => {
  const Calculation = sequelize.define(
    "Calculation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      operation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operands: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      result: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users", // This must match the table name exactly
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: true,
    }
  );

  return Calculation;
};
