// Data atual
let currentDate = new Date();

// Obtendo o nome do dia da semana em "pt-BR"
let weekDay = currentDate.toLocaleString("pt-BR", { weekday: "long" });

// Dizendo o dia da semana
alert("Hoje o dia da semana é " + weekDay + ".");
