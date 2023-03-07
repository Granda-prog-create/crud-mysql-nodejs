const express = require('express'); 
const router = express.Router(); 
const entradaController = require('../controllers/entrada.controller');
const verifyJWT = require('../middlewares/authorizator'); 
const entradaValidator = require('../validators/entrada.validator'); 

router.post('/',verifyJWT, entradaValidator.create(), entradaController.create);

router.get('/',verifyJWT, entradaController.findEverbody);

router.get('/:id',verifyJWT, entradaValidator.encontrarPorId(), entradaController.encontrarPorId);


module.exports = router; 

