// Buscando os elementos
let input_text = document.getElementById("input_text");
let input_color = document.getElementById("input_color");
let content = document.querySelector(".content");
let nameColor = document.getElementsByTagName("h2")[1];

// Solicitar ao usuário que digite uma cor
let color;


// Evento para que o valor dos inputs façam alterar simultaneamente a cor de fundo
input_color.addEventListener("input", function () {
    content.style.backgroundColor = input_color.value;

    input_text.value = input_color.value
});

input_text.addEventListener("input", function () {
    content.style.backgroundColor = input_text.value;
});


// Validando a cor digitada pelo usuário

do {
    color = prompt("Digite uma cor em hexadecimal (#ff0000) ou o nome em inglês (red).")
} while (!validateColor(color));

if (validateColor(color)) {
    content.style.backgroundColor = color;

    alert("Cor válida! Alterando cor de fundo para " + color +".")
};


// Função para validar o nome da cor
function validateColor(nameColor) {
    // Lista dos nomes das cores HTML5 
    const coresHTML5 = [
        "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond",
        "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
        "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey",
        "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon",
        "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink",
        "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia",
        "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink",
        "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
        "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink",
        "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue",
        "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue",
        "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
        "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace",
        "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
        "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple",
        "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna",
        "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal",
        "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
    ]

    // Converte nome da cor para minúscula
    const nameColorLowerCase = nameColor.toLowerCase();

    // Verifica se o nome da cor está na lista de cores HTML5
    if (coresHTML5.includes(nameColorLowerCase)) {
        return true
    } else {
        return false
    }
};