/*
Regras de Desconto:
Compras até R$100: sem desconto.
Compras entre R$100,01 e R$300: 10% de desconto.
Compras entre R$300,01 e R$500: 15% de desconto.
Compras acima de R$500: 20% de desconto.
*/
const verDesconto = function(elemento){
    return console.log(`O desconto é de ${elemento}`);
}


function calcularDesconto(valorCompra) {
    let valorFinal;

    if (valorCompra <= 100) {
        valorFinal = valorCompra; // Sem desconto
    } else if (valorCompra > 100 && valorCompra <= 300) {
        valorFinal = valorCompra * 0.90; // 10% de desconto
    } else if (valorCompra > 300 && valorCompra <= 500) {
        valorFinal = valorCompra * 0.85; // 15% de desconto
    } else {
        valorFinal = valorCompra * 0.80; // 20% de desconto
    }

    return valorFinal;
}
/*
Usando o operador ternário em vez 
de if, else if, e else para praticar outra forma de controle de fluxo.
*/

function calcularDescontoComTernario(valorCompra) {
    return valorCompra <= 100 ? valorCompra :
           valorCompra <= 300 ? valorCompra * 0.90 :
           valorCompra <= 500 ? valorCompra * 0.85 :
           valorCompra * 0.80;
}

//-------------------------------------------------------------
calcularDesconto(80);  // Deve retornar 80 (sem desconto)
calcularDesconto(150); // Deve retornar 135 (10% de desconto)
calcularDesconto(350); // Deve retornar 297,5 (15% de desconto)
calcularDesconto(600); // Deve retornar 480 (20% de desconto)

verDesconto(calcularDesconto(350));