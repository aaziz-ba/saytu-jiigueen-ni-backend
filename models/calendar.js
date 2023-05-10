"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Calendar extends Model {
        static associate(models) {
            // define association here
        }
    }
    Calendar.init(
        {
            debut_derniere_regle: DataTypes.DATE,
            duree_moyenne_cycle: DataTypes.INTEGER,
            duree_moyenne_regles: DataTypes.INTEGER,
            debut_prochain_regles: DataTypes.DATE,
            date_fertilité: DataTypes.DATE,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Calendar",
        }
    );
    return Calendar;
};
