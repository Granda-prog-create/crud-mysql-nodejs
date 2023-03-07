const { validationResult } = require('express-validator');
const usuarioService = require('../services/usuario.service'); 
const createErrors = require('http-errors');

const create = async function(req,res) {
    try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw createError(422, { errors: errors.array() })
		}

		const response = await usuarioService.criar(req.body);

		if (response && response.message) {
			throw response;
		}
		
		res.send(response);
	} catch (error) {
		return next(error);
	}
    
}

const login = async function(req,res,next) {
    try{
        const errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            //Todos os erros capturados
            throw createErrors(422, {errors: errors.array()}); 

          }



        const response = await usuarioService.login(req.body);
        if (response && response.message) {
            throw response; 
        } 


        res.send(response); 

    } catch (error) {
        return next(error); 

    }
}

const atualizar = async function(req,res,next) {
    try {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            //Todos os erros capturados
            throw createErrors(422, {errors: errors.array()}); 

          }
          const response = await usuarioService.atualizar({
            nome: req.body.nome
          }, req.params.id); 

          if(response && response.message){
            throw response;
          }

          res.send(response);
        
    } catch (error) {
        return next(error); 
        
    }
    
}

const findEverbody = async function (req,res, next) {
    try {
        
          const response = await usuarioService.findEverbody(); 
          res.send(response);
        
    } catch (error) {
        next(error);
        
    }
  
}

const findById = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }

        const response = await usuarioService.findById(req.params.id); 
        if(response && response.message) {
            throw response; 
        }

        res.send(response); 
        
    } catch (error) {
        next(error);  
    }
   
}

const deletar = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            throw createError(422, {errors: errors.array()})
        }

        const response = await usuarioService.deletar(req.params.id); 
        if(response && response.message) {
            throw response; 
        }

        res.send(response); 
        
    } catch (error) {
        next(error);  
    }
   
}

module.exports = {
    create: create,
    findEverbody: findEverbody, 
    findById: findById, 
    atualizar: atualizar, 
    deletar: deletar, 
    login: login, 
}

  