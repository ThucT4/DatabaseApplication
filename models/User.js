//This is a test model for the User table
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
