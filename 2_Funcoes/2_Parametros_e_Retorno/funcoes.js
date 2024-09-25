/*
==============================
    Parâmetros
==============================
*/

function saudacao(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);
}

saudacao();  // Saída: Olá, Visitante!
saudacao("Edgar");  // Saída: Olá, Edgar!

/*
==============================
    Exemplo com Objeto
==============================
*/
function criarPessoa(nome, idade) {
    return { nome: nome, idade: idade };
}

let pessoa = criarPessoa("Edgar", 25);
console.log(pessoa);  // Saída: { nome: 'Edgar', idade: 25 }

/*
==============================
    Exemplo com Array
==============================
*/
function criarLista(a, b, c) {
    return [a, b, c];
}

let lista = criarLista(1, 2, 3);
console.log(lista);  // Saída: [1, 2, 3]
