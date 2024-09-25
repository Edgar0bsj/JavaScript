/*
===============================
Closure: A capacidade de uma função de "lembrar" das variáveis do 
escopo em que foi criada, mesmo depois que o escopo externo deixou de existir.
===============================
*/
function criarContador() {
    let contador = 0;

    return function() {
        contador++;
        return contador;
    };
}

let contar = criarContador();

console.log(contar());  // Saída: 1
console.log(contar());  // Saída: 2
console.log(contar());  // Saída: 3
console.log(contar());  // Saída: 4
