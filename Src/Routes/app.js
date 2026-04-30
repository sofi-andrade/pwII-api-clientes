const express = require("express");
const   clientesRoutes = require("./Routes/clientesRoutes") 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//Rota raiz: 
app.get("/" , (req, res) => {
res.json({
    mensagem: "API de cliente",
    versao: "1.0.0",
    endpoints: {
        listarTodos: "GET/clientes",
        buscarPorId: "GET/clientes/:id"
    }
})

})
app.use("/cliente", clientesRoutes);
app.use((req, res) => {
res.status (404).json({
    sucesso:false,
    mensagem: "Rota não entrada",
})
})

app.listen(PORT, () => {
    console.log(`Servido rodado na porta ${PORT}`)
})
module.exports.app; 