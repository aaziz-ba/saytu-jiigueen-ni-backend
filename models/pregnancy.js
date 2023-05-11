"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Pregnancy extends Model {
        static associate(models) {
            // define association here
        }
    }
    Pregnancy.init(
        {
            date_debut: DataTypes.DATE,
            date_prevu_accouchement: DataTypes.DATE,
            declaration_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Pregnancy",
        }
    );
    return Pregnancy;
};
