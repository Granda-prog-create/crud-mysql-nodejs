// Camada que lida com o banco de dados

const {Usuario } = require('../database/models/index'); 

const create = async function(usuario) {
    const usuarioCriado = await Usuario.create(usuario); 
    return usuarioCriado; 
}

const atualizar = async function(usuario, id) {
    await Usuario.update(usuario, {
        where: {id: id}

    }); 
}

const findUsers = async function() {
    const usuarios = await Usuario.findAll; 
    return usuarios; 
}

const findId = async function(id) {
    const usuario = await Usuario.findByPk(id); 
    return usuario; 
}

const findByWhere = async function(where) {
    const usuario = await Usuario.findOne({
        where: where 
    }); 
    return usuario; 
}

const deletar = async function (id) {
    return await Usuario.destroy({where: {id: id}});
}

module.exports =  {
    create: create,  
    atualizar: atualizar,
    findUsers: findUsers,
    findId: findId, 
    findByWhere: findByWhere, 
    deletar: deletar, 
}