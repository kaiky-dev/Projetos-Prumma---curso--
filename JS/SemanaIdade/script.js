// Data atual
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth();

// Data fornecida pelo usuário
alert("Responda somente com os numéros respectivos.");
let day = parseInt(prompt("Digite um dia. (Exemplo: 09)"));
let month = parseInt(prompt("Digite um mês. (Exemplo: 06)"));
let year = parseInt(prompt("Digite um ano. (Exemplo: 2004)"));

let userDate = new Date(year, month - 1, day);

// Dia da semana
let weekDay = userDate.toLocaleString("pt-BR", { weekday: "long" });

alert(userDate + " ,o dia da semana é " + weekDay + ".");

// Data de nascimento
let dayBorn = parseInt(prompt("Em que dia você nasceu"));
let monthBorn = parseInt(prompt("Em que mês você nasceu"));
let yearBorn = parseInt(prompt("Em que ano você nasceu"));

// Calculo da idade
function calcBirth(year) {
    let birth = currentYear - year;
    return birth
};

let age = calcBirth(yearBorn)

// Correção do calculo
if (currentMonth < monthBorn || (currentMonth == monthBorn && currentDay < dayBorn)) {
    age--
};

// Dizendo a idade
alert("Você tem "+ age + " anos.");

