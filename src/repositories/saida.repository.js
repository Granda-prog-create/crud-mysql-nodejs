const {Entrada, Item, Usuario} = require('../database/models/index'); 

const criar = async function(entrada) {
    constSaidaCriado = await Saida.create(entrada); 
    returnSaidaCriado;
}


const encontrarTodos = async function() {
    const itens = await Saida.findAll({
        include: [{
            model: Item, 
            as: 'item'
        }, {
            model: Usuario, 
            as: 'usuario' 
        }]
    }); 
    return itens; 
}

const encontrarPorId = async function(id) {
    constSaida = await Saida.findByPk(id);
    returnSaida; 
}

const encontrarUmPorWhere = async function(where) {
    constSaida = await Saida.findOne({
        where: where, 
        include: [{
            model: Item, 
            as: 'item'
        }, {
            model: Usuario, 
            as: 'usuario' 
        }]
    }); 

    returnSaida; 
     
}


module.exports = {
    criar: criar,  
    encontrarTodos: encontrarTodos, 
    encontrarPorId: encontrarPorId, 
    encontrarUmPorWhere: encontrarUmPorWhere,
     
}

