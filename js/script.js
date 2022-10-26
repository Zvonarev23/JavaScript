// Урок 1

let title = "JavaScript!";
let screens = 1920;
let screenPrice = 20000;
let rollback = "Html";
let fullPrice = 25000;
let adaptive = "Fuck off";

console.log(title);

// Урок 2

// Задание 1

title = "JavaScript - это просто!";
screens = "Простые, Сложные, Интерактивные"
screenPrice = 10000;
rollback = 20;
fullPrice = 90000;
adaptive = true;

// Задание 2

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей")
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей")
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log(fullPrice * (rollback / 100));