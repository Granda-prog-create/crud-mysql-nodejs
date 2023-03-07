const EntradaRepository = require('../repositories/Entrada.repository');
const itemRepository = require('../repositories/item.repository'); 
const createError = require('http-errors');

const criar = async function (entrada) {
	const entradaCriada = await EntradaRepository.criar(entrada);
    const item = await itemRepository.encontrarPorId(entrada.item_id); 

    if(!item) { 
       return createError(404,  'O item não existe, entrada inválida!');
    }

    const quantidade = entradaCriada.quantidade + item.quantidade; 

    await itemRepository.atualizar({quantidade}, item.id); 
    return entradaCriada;
}

const encontrarTodos = async function () {
	const entrada = await EntradaRepository.encontrarTodos();
	return entrada;
}

const encontrarPorId = async function (id) {
	const entrada = await entradaRepository.encontrarUmPorWhere({id: id});

	if (!entrada) {
		return createError(404,  'Entrada não encontrado');
	}
	
	return entrada;
}



module.exports = {
	criar: criar,
	encontrarTodos: encontrarTodos,
	encontrarPorId: encontrarPorId,
}