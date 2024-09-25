/*
============== Método Descrição =======================

push()	Adiciona um ou mais elementos ao final do array.
pop()	Remove o último elemento do array e o retorna.
forEach()	Executa uma função em cada elemento do array, sem retornar um novo array.
map()	Cria um novo array com os resultados de aplicar uma função em cada elemento.
filter()	Cria um novo array com elementos que passam em um teste.
find()	Retorna o primeiro elemento que satisfaz uma condição ou undefined.
reduce()	Reduz o array a um único valor com base em uma função acumulativa.
========================================================
*/

// Criando um Array
const frutas = ["maçã", "banana"];

// push()
frutas.push("laranja");
console.log(frutas);  // Saída: ["maçã", "banana", "laranja"]

// pop()
const ultimaFruta = frutas.pop();

console.log(ultimaFruta);  // Saída: "laranja"
console.log(frutas);  // Saída: ["maçã", "banana"]

// forEach()
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => {
    console.log(num * 2);  // Saída: 2, 4, 6, 8, 10 
});

// map()
const dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // Saída: [2, 4, 6, 8, 10]

// filter()
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);  // Saída: [2, 4]

// find()
const primeiroPar = numeros.find(num => num % 2 === 0);
console.log(primeiroPar);  // Saída: 2

// reduce()
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);  // Saída: 15