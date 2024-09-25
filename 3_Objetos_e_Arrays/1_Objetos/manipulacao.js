/*
===================================
------Manipulação de Objetos-------
===================================
*/
// Acessando Propriedades
console.log(pessoa.nome);  // Saída: Edgar
console.log(pessoa['idade']);  // Saída: 25

// Modificando Propriedades
pessoa.idade = 26;  // Modifica a idade
console.log(pessoa.idade);  // Saída: 26

// Adicionando Novas Propriedades
pessoa.profissao = "Desenvolvedor";  // Adiciona nova propriedade
console.log(pessoa.profissao);  // Saída: Desenvolvedor

// Removendo Propriedades
delete pessoa.cidade;  // Remove a propriedade cidade
console.log(pessoa.cidade);  // Saída: undefined
