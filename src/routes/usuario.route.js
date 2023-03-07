const express = require('express');
const router = express.Router(); 
const usuarioController = require('../controllers/usuario.controller');
const usuarioValidator = require('../validators/usuario.validator'); 
const verifyJWT = require('../middlewares/authorizator');

// Rotas da aplicação 


router.post('/',usuarioValidator.create(), usuarioController.create);  

router.post('/login',usuarioValidator.login(), usuarioController.login);  

router.post('/',verifyJWT, usuarioController.findEverbody);  
 

router.get('/:id', verifyJWT, usuarioValidator.encontrarPorId(), usuarioController.findById); 

router.put('/:id', verifyJWT,usuarioValidator.atualizar(), usuarioController.atualizar); 

router.delete('/:id', verifyJWT, usuarioValidator.deletar(), usuarioController.deletar); 

module.exports = router; 

