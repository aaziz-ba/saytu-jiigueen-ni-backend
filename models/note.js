"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Note extends Model {
        static associate(models) {
            //
        }
    }
    Note.init(
        {
            contenu: DataTypes.STRING,
            declaration_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Note",
        }
    );
    return Note;
};
