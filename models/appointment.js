"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        static associate(models) {
            // define association here
        }
    }
    Appointment.init(
        {
            date_rdv: DataTypes.DATE,
            lieu: DataTypes.STRING,
            nom_medecin: DataTypes.STRING,
            pregnancy_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Appointment",
        }
    );
    return Appointment;
};
