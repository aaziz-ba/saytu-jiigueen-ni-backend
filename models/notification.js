"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Notification extends Model {
        static associate(models) {
            // define association here
        }
    }
    Notification.init(
        {
            contenu: DataTypes.STRING,
            type: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Notification",
        }
    );
    return Notification;
};
