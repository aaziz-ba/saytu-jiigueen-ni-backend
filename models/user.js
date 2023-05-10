"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            prenom: DataTypes.STRING,
            nom: DataTypes.STRING,
            telephone: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            profil: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
