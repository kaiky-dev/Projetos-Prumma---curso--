// Total do preço dos produtos e sua lista
let total = 0;
let listaProdutos = '';

// nome / quantidade / preço dos produtos  
while (true) {
    let produto = prompt("Digite o nome do produto (ou 'fim' para encerrar):");

    if (produto.toLowerCase() === 'fim') {
        break;
    }

    let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade do produto:"));

// Calcula o subtotal do produto e adiciona ao total
    let subtotal = precoUnitario * quantidade; 
    total += subtotal;

// Atualiza a lista de produtos com os detalhes do produto atual
    listaProdutos += `${produto}: ${quantidade} x R$ ${precoUnitario.toFixed(2)} = R$ ${subtotal.toFixed(2)}\n`;
}

// Imprime a lista de produtos e o total
console.log("Lista de Produtos:");
console.log(listaProdutos);
console.log(`Total da Compra: R$ ${total.toFixed(2)}`);
