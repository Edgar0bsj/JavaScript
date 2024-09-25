// Declaração de variáveis
let temperatura = 30;      // A temperatura pode mudar
const PI = 3.14159;        // O valor de PI é constante
var cidade = "Rio de Janeiro";  // Cidade pode mudar, mas aqui usamos var para entender a diferença

// Exibindo os valores no console
console.log("Temperatura atual:", temperatura);  // Saída: 30
console.log("Valor de PI:", PI);                // Saída: 3.14159
console.log("Cidade atual:", cidade);           // Saída: São Paulo

// Alterando valores das variáveis
temperatura = 35;          // Temperatura agora é 35
cidade = "Rio de Janeiro"; // Mudou para outra cidade

// Tentativa de alterar PI (isso vai gerar um erro)
// PI = 3.14;  // Descomente para ver o erro no console

// Exibindo os valores atualizados no console
console.log("Nova temperatura:", temperatura);  // Saída: 35
console.log("Nova cidade:", cidade);            // Saída: Rio de Janeiro

