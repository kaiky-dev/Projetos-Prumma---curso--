// Array para armazenar os produtos
let products = [];

// Loop para adicionar produtos
while (true) {
    // Solicitar ao usuário o nome do produto
    let productName = prompt("Digite o nome do produto (ou 'fim' para encerrar):");

    // Verificar se o usuário deseja encerrar o programa
    if (productName.toLowerCase() === 'fim') {
        break;
    }

    // Solicitar ao usuário o preço unitário do produto e validar a entrada
    let unitPrice = parseFloat(prompt("Digite o preço unitário do produto:"));
    if (isNaN(unitPrice) || unitPrice <= 0) {
        alert("Preço unitário inválido. Digite um número positivo.");
        continue; // Volta para o início do loop
    }

    // Solicitar ao usuário a quantidade do produto e validar a entrada
    let quantity = parseInt(prompt("Digite a quantidade do produto:"));
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantidade inválida. Digite um número inteiro positivo.");
        continue; // Volta para o início do loop
    }

    // Adicionar o produto ao array de produtos
    products.push({ name: productName, price: unitPrice, quantity: quantity });
}

// Ordenar a lista de produtos em ordem alfabética pelo nome do produto
products.sort((a, b) => a.name.localeCompare(b.name));

// Imprimir a lista de produtos
console.log("Lista de Produtos:");
products.forEach(product => {
    let subtotal = product.price * product.quantity;
    console.log(`${product.name}: ${product.quantity} x R$ ${product.price.toFixed(2)} = R$ ${subtotal.toFixed(2)}`);
});
