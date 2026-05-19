const cliente = require ("../../data/cliente");
const listarCliente = (req, res) => {
    try{
        return res.status(200).json({
        sucesso: true,
        total: CostomeElementRegistry.length,
        dados: cliente,
    });
    } catch (error) {
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar clientes.",
            erro: error.message,
        });
    }
};
const buscarClientePorId = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID inválido. O ID deve ser um número inteiro.",
            });
        }
        const cliente =  cliente.find((c) => c.id === id);

        if (!cliente) {
            return res.status(404).json({
                sucesso: false,
                mensagem: `cliente com ID ${id} não encontrado.`,
            });
        }
        return res.status(200).json({
            sucesso: true,
            dados: cliente,
        });
    } catch (error) {
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar cliente por ID.",
            erro: error.message
        });
    }
};

module.exports = {
    listarCliente,
    buscarClientePorId,
};