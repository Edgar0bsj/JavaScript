/*
===============================
    Escopo (Scope)
===============================
*/
let globalVar = "Estou no escopo global";

function exemplo() {
    console.log(globalVar);  // Acessa a variável global
}

exemplo();  // Saída: Estou no escopo global
/*
===============================
    Escopo de Função
===============================
*/
function saudacao() {
    let mensagem = "Olá!";
    console.log(mensagem);  // Acessível dentro da função
}

saudacao();  // Saída: Olá!
console.log(mensagem);  // Erro: mensagem não está definida no escopo global
/*
===============================
    Escopo de Bloco
===============================
*/
if (true) {
    let nome = "Edgar";
    console.log(nome);  // Acessível dentro do bloco
}

console.log(nome);  // Erro: nome não está definido fora do bloco
