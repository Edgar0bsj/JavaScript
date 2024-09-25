//==========================================
// Operadores Aritméticos
//==========================================

let a = 10;
let b = 5;
let resultado;

// Adição
resultado = a + b;
console.log("Adição: " + resultado);

// Subtração
resultado = a - b;
console.log("Subtração: " + resultado);

// Multiplicação
resultado = a * b;
console.log("Multiplicação: " + resultado);

// Divisão
resultado = a / b;
console.log("Divisão: " + resultado);

let x = 15;
let y = 20;

//==========================================
// Operadores de Comparação
//==========================================

console.log("x é maior que y? " + (x > y));
console.log("x é igual a y? " + (x === y));
console.log("x é diferente de y? " + (x !== y));

//==========================================
// Operadores Lógicos
//==========================================

let condicao1 = true;
let condicao2 = false;

console.log("Ambas são verdadeiras? " + (condicao1 && condicao2));
console.log("Uma ou outra é verdadeira? " + (condicao1 || condicao2));
console.log("Negação de condicao2: " + (!condicao2));

//==========================================
// Operadores de Atribuição
//==========================================

let numero = 30;

numero += 5;
console.log("Após += 5: " + numero);

numero -= 3;
console.log("Após -= 3: " + numero);

numero *= 2;
console.log("Após *= 2: " + numero);

numero /= 4;
console.log("Após /= 4: " + numero);
