// Buscando os elementos
let input_color = document.getElementById("input_color");

let content = document.querySelector(".content");

// Evento para que o valor do input (input_color) seja alterado simultaneamente a mudança escolhida
input_color.addEventListener("input", function () {
    content.style.color = input_color.value;
});