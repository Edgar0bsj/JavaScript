const numeros = [1, 2, 3, 4, 5];

// 1. Multiplica cada número por 2 (map)
const dobrados = numeros.map(num => num * 2);

// 2. Filtra apenas os números maiores que 5 (filter)
const maioresQueCinco = dobrados.filter(num => num > 5);

// 3. Soma todos os números restantes (reduce)
const soma = maioresQueCinco.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma);  // Saída: 18
