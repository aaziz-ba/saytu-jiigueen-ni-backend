const express = require("express");
const router = express.Router();
const declarationController = require("../controllers/declaration.controller");

router.get("", declarationController.all);
router.post("", declarationController.save);
router.get(":id", declarationController.show);
router.patch(":id", declarationController.update);
router.delete(":id", declarationController.destroy);

module.exports = router;
