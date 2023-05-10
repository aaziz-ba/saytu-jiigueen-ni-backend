"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Mood extends Model {
        static associate(models) {
            //
        }
    }
    Mood.init(
        {
            nom: DataTypes.STRING,
            description: DataTypes.STRING,
            declaration_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Mood",
        }
    );
    return Mood;
};
