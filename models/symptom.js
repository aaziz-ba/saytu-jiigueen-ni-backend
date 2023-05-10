"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Symptom extends Model {
        static associate(models) {
            //
        }
    }
    Symptom.init(
        {
            nom: DataTypes.STRING,
            description: DataTypes.STRING,
            declaration_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Symptom",
        }
    );
    return Symptom;
};
