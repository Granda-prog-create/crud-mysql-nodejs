const express = require('express'); 
const router = express.Router(); 
const saidaController = require('../controllers/saida.controller');
const verifyJWT = require('../middlewares/authorizator'); 
const saidaValidator = require('../validators/saida.validator'); 

router.post('/',verifyJWT, saidaValidator.create(), saidaController.create);

router.get('/',verifyJWT, saidaController.findEverbody);

router.get('/:id',verifyJWT, saidaValidator.encontrarPorId(), saidaController.encontrarPorId);


module.exports = router; 

