const validatorMessage = function (atributo) { 
    return `A propriedade '${atributo}' é inválida! `;
}

const notExits = function(atributo) {
    return `${atributo} não existe!`;
}

module.exports = {
    validatorMessage: validatorMessage,
    notExits: notExits, 
} 