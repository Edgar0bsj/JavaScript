/*
    Função Normal
*/

function nomeDaFuncaoNormal(nome) {
    return `Olá, ${nome}!`;
}

/*
    Função Anônima
*/

const nomeDaFuncaoAnonima = function(nome) {
    return `Olá, ${nome}!`;
};

/*
    Arrow Function
    Observação:
    Se o corpo da função contém apenas uma expressão, 
    o return é implícito e as chaves {} podem ser omitidas:
*/

const nomeDaFuncaoArrow = (nome) => `Olá, ${nome}!`;


console.log(nomeDaFuncaoArrow('Edgar'));