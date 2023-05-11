"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cycle extends Model {
        static associate(models) {
            // define association here
        }
    }
    Cycle.init(
        {
            date_regle: DataTypes.DATE,
            duree_cycle: DataTypes.INTEGER,
            duree_regle: DataTypes.INTEGER,
            declaration_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Cycle",
        }
    );
    return Cycle;
};
