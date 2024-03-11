// Total do preço dos produtos e sua lista
let total = 0;
let productsList = '';

// nome / quantidade / preço dos produtos  
while (true) {
    let product = prompt("Digite o nome do produto (ou 'fim' para encerrar):");

    if (product.toLowerCase() === 'fim') {
        break;
    }

    let unitPrice = parseFloat(prompt("Digite o preço unitário do produto:"));
    let amount = parseInt(prompt("Digite a quantidade do produto:"));

// Calcula o subtotal do produto e adiciona ao total
    let subtotal = unitPrice * amount; 
    total += subtotal;

// Atualiza a lista de produtos com os detalhes do produto atual
productsList += `${product}: ${amount} x R$ ${unitPrice.toFixed(2)} = R$ ${subtotal.toFixed(2)}\n`;
}

// Imprime a lista de produtos e o total
console.log("Lista de Produtos:");
console.log(productsList);
console.log(`Total da Compra: R$ ${total.toFixed(2)}`);