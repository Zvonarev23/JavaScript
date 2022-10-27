// Урок 2

// Задание 1

let title = "JavaScript - это просто!";
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 10000;
let rollback = 20;
let fullPrice = 90000;
let adaptive = true;

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