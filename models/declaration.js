"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Declaration extends Model {
        static associate(models) {
            // define association here
        }
    }
    Declaration.init(
        {
            type: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Declaration",
        }
    );
    return Declaration;
};
