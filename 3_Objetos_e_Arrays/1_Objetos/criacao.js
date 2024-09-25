/*
===================================
------Criação de Objetos-----------
===================================
*/
const objetoPessoa = {
    nome: "Edgar",
    idade: 25,
    cidade: "São Paulo"
};

// Usando a Função Construtora 
function Pessoa(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
}

const pessoa1 = new Pessoa("Edgar", 25, "Rio de Janeiro");

// Usando a Classe
class ClassePessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}

const pessoa2 = new ClassePessoa("Maria", 30, "Rio de Janeiro");



