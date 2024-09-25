/*
==============================================================================
Destructuring é uma sintaxe no JavaScript que permite extrair valores de 
objetos e arrays e atribuí-los a variáveis de forma mais concisa e legível. 
Essa técnica facilita a extração de dados sem a necessidade de acessar cada 
propriedade ou elemento individualmente.
==============================================================================
*/
const pessoa = {
    nome: "Edgar",
    idade: 25,
    cidade: "São Paulo"
};

// Destructuring
const { nome, idade } = pessoa;

console.log(nome);  // Saída: Edgar
console.log(idade); // Saída: 25

// ---------------------------------------
// Com Array
const frutas = ["maçã", "banana", "laranja"];

// Destructuring
const [fruta1, fruta2] = frutas;

console.log(fruta1); // Saída: maçã
console.log(fruta2); // Saída: banana
// ---------------------------------------
// Destructuring em Funções
const ppessoa = {
    nome: "Edgar",
    idade: 25
};

function apresentar({ nome, idade }) {
    return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(apresentar(ppessoa)); // Saída: Olá, meu nome é Edgar e tenho 25 anos.

// Atribuição a Variáveis com Nomes Diferentes:
const pessooa = {
    nome: "Edgar",
    idade: 25
};

// Atribuindo a variáveis com nomes diferentes
const { nome: primeiroNome, idade: anos } = pessooa;

console.log(primeiroNome); // Saída: Edgar
console.log(anos);         // Saída: 25

