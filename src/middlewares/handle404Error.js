// Criação da rota que mostra o erro

const handle404Error = function (req, res) {
    res.status(404); 
    res.send(['Não encontrado...'])
} 

module.exports = handle404Error; 