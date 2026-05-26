const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController")


router.get("/", clientesController.listarCliente);
router.get("/:id", clientesController.buscarClientePorId);

router.post("/:id", clientesController.adicionarCliente);
router.put("/:id", clientesController.atualizarCliente);
router.delete("/:id", clientesController.deletarCliente);

module.exports = router;