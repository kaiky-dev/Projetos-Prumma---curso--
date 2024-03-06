// Data de nascimento 
// ( curiosidade: Os exemplos formam a data de lançamento da primeita versão do javascript )
alert("Responda as perguntas a seguir somente com os numéros respectivos.");

let yearBorn = parseInt(prompt("Em qual ano você nasceu? (Exemplo: 04)"));
let monthBorn = parseInt(prompt("Em qual mês você nasceu? (Exemplo: 12)"));
let dayBorn = parseInt(prompt("Em qual dia você nasceu? (Exemplo: 1995)"));

// Data atual
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

// Calculo da idade
function calcBirth(year) {
    let birth = currentYear - year;
    return birth
};

let age = calcBirth(yearBorn);

// Verificando se a idade calculada está correta e a corrigindo se não estiver 
if (currentMonth < monthBorn || (currentMonth == monthBorn && currentDay < dayBorn)) {
    age--
};

// Dizendo a idade
alert("Você tem " + age + " anos.");

