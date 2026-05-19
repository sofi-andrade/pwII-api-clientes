const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clientesController")


router.get("/", clienteController.listarCliente);
router.get("/:id", clienteController.buscarClientePorId);

module.exports = router;