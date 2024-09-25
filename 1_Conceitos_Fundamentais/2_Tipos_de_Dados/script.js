// 1. Criação das variáveis
let nome = "Edgar";  // string
let idade = 25;      // number
let eEstudante = true; // boolean
let valorNulo = null;  // null
let indefinido;       // undefined

// 2. Imprimir as variáveis e seus tipos
console.log("Nome:", nome, "- Tipo:", typeof nome);
console.log("Idade:", idade, "- Tipo:", typeof idade);
console.log("É estudante:", eEstudante, "- Tipo:", typeof eEstudante);
console.log("Valor nulo:", valorNulo, "- Tipo:", typeof valorNulo);
console.log("Indefinido:", indefinido, "- Tipo:", typeof indefinido);

// 3. Operações
// a) Concatenação de string
let frase = "Meu nome é " + nome;
console.log(frase);

// b) Somar idade com 5 anos
let idadeFutura = idade + 5;
console.log("Idade em 5 anos:", idadeFutura);

// c) Alterar o valor booleano
eEstudante = false;
console.log("Agora estudante?", eEstudante);
