// Array para armazenar os números
let numbers = [];

// Loop para solicitar números ao usuário
while (true) {
    // Solicitar ao usuário um número e armazená-lo como uma string
    let input = prompt("Digite um número:");

    // Verificar se o input é um número
    if (!validateNumber(input)) {
        console.log("Por favor, digite um número válido.");
        break; // Encerrar o loop se a entrada não for válida
    }

    // Converter a entrada para um número e adicionar ao array
    numbers.push(parseFloat(input));
}

// Se o array de números não estiver vazio, ordenar e mostrar os números em ordem crescente
if (numbers.length > 0) {
    // Ordenar os números em ordem crescente
    numbers.sort((a, b) => a - b);

    // Mostrar os números em ordem crescente
    console.log("Números em ordem crescente:");
    numbers.forEach(number => {
        console.log(number);
    });
}

// Função para validar se a entrada é um número
function validateNumber(input) {
    // Verificar se a entrada é um número válido
    return !isNaN(input) && input.trim() !== "";
}
