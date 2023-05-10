function all(req, res) {
    res.send("Liste des déclarations");
}

function save(req, res) {
    res.send("Ajouter une déclaration");
}

function show(req, res) {
    res.send("Afficher une déclaration");
}

function update(req, res) {
    res.send("Modifier une déclaration");
}

function destroy(req, res) {
    res.send("Supprimer une déclaration");
}

module.exports = {
    all       : all,
    save      : save,
    show      : show,
    update    : update,
    destroy   : destroy,
};
