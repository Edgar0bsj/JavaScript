/*
===================================
------Métodos em Objetos-----------
===================================
*/
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `${this.marca} ${this.modelo} - Ano: ${this.ano}`;
    }

    atualizarAno(novoAno) {
        this.ano = novoAno;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2020);
console.log(meuCarro.detalhes());  // Saída: Toyota Corolla - Ano: 2020

meuCarro.atualizarAno(2023);
console.log(meuCarro.detalhes());  // Saída: Toyota Corolla - Ano: 2023
