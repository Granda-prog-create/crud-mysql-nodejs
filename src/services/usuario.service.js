const usuarioRepository = require('../repositories/usuario.repository');
const createError = require('http-errors'); 
require('dotenv').config(); 
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken'); 

const create = async function(usuario) {
    const existeUsuario = await usuarioRepository.findByWhere({email: usuario.email}); 

    if(existeUsuario) {
        return createError(409, 'O usuário já existe.'); 
    }


    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT); 
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const login = async function(usuario) {
    const usuarioLogin = await usuarioRepository.findByWhere({
        email: usuario.email
    });

    if(!usuarioLogin) {
        return createError(401, 'Usuário inválido'); 
    }
    
    const comparacaoSenha = await bcrypt.compare(usuario.senha, usuarioLogin.senha); 
    
    if(!comparacaoSenha) {
        return createError(401, 'Usuário inválido'); 
    }

    const token = sign({
        id: usuarioLogin.id
    },process.env.SECRET, {});
    delete usuarioLogin.senha

    return {
        auth: true, 
        usuario: usuarioLogin,
        token: token, 
    }


}

const atualizar = async function(usuario, id) {
    const existeUsuario = await usuarioRepository.findById(id);

    if(!existeUsuario) {
        return createError(404, 'O usuário não existe!'); 
    }

    await usuarioRepository.atualizar(usuario, id); 

    return await usuarioRepository.findId(id); 
}

const findUsers = async function() {
    const usuarios = await usuarioRepository.findUsers();
    return usuarios;
}

const findById = async function(id) {
    const usuario = await usuarioRepository.findById(id);

    if(!usuario) {
        return createError(404, 'Usuário não encontrado...');  
    }
    return usuario; 
}

const deletar = async function(id) {
    const usuario = await usuarioRepository.findById(id);

    if(!usuario) {
        return createError(404, 'Usuário não encontrado...');  
    }

    await usuarioRepository.deletar(id);
    

    return usuario; 
}

module.exports = {
    create: create, 
    atualizar: atualizar,
    findUsers: findUsers,
    findById: findById, 
    deletar: deletar, 
    login: login, 
}
