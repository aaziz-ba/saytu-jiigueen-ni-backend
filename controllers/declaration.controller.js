const models = require('../models')

function all(req, res) {
    models.Declaration.findAll()
        .then((result) => {
            if (result.length === 0) {
                res.status(404).json({
                    message: "Aucune déclaration disponible !",
                    payload: [],
                });
            } else {
                res.status(200).json({
                    message: "",
                    payload: result,
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Quelque chose a mal tourné !",
                error: error.message,
            });
        });
}

function save(req, res) {
    const declaration = {
        type: req.body.type,
        user_id: 1,
    };

    models.Declaration.create(declaration)
        .then((result) => {
            res.status(201).json({
                message: "Déclaration créée avec succès !",
                payload: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Quelque chose a mal tourné !",
                error: error.message,
            });
        });
}

function show(req, res) {
    const declarationId = req.params.id;

    models.Declaration.findByPk(declarationId)
        .then((result) => {
            if (!result) {
                res.status(404).json({
                    message: "Déclaration introuvable !",
                    payload: {},
                });
            } else {
                res.status(200).json({
                    message: "",
                    payload: result,
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Quelque chose a mal tourné !",
                error: error.message,
            });
        });
}

function update(req, res) {
    const declarationId = req.params.id;

    const updatedDeclaration = {
        type: req.body.type,
    };

    const userId = req.body.user_id;

    models.Declaration.update(updatedDeclaration, {
        where: { id: declarationId, user_id: userId },
    })
        .then((result) => {
            res.status(200).json({
                message: "Déclaration modifiée avec succès !",
                payload: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Quelque chose a mal tourné !",
                error: error.message,
            });
        });
}

function destroy(req, res) {
    const declarationId = req.params.id;
    const userId = req.body.user_id;

    models.Declaration.destroy({
        where: { declaration_id: declarationId, user_id: userId },
    })
        .then((result) => {
            res.status(200).json({
                message: "Déclaration supprimée avec succès !",
                payload: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Quelque chose a mal tourné !",
                error: error.message,
            });
        });
}

module.exports = {
    all: all,
    save: save,
    show: show,
    update: update,
    destroy: destroy,
};
