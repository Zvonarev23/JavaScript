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

// Задание 3 

// Спрашиваем у пользователя "Как называется ваш проект?" и результат сохраняем в переменную title 

title = prompt("Как называется ваш проект?");

// Спросить у пользователя "Какие типы экранов нужно разработать?" Сохранить в переменную screens
screens = prompt("Какие типы экранов нужно разработать?");

// Спросить у пользователя "Сколько будет стоить данная работа?" и сохранить данные в переменной adaptive (булево значение true/false)
adaptive = confirm("Нужен ли адаптив на сайте?");

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. "Какой дополнительный тип услуг нужен?" (Например servise1 , servise2). 2 "Сколько будет это будет стоить?" (например servicePrice1, servisePrice2)

let servise1 = prompt("Какой дополнительный тип услуг нужен?");
let servisePrice1 = +prompt("Сколько это будет стоить?");

let servise2 = prompt("Какой дополнительный тип услуг нужен?");
let servisePrice2 = +prompt("Сколько это будет стоить?");

// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servisePrice + servisePrice2) и результат занести в переменную fullPrice 
fullPrice = screenPrice + servisePrice1 + servisePrice2;

// Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль

let servicePercentPrice = Math.ceil(fullPrice - 1500);
console.log(servicePercentPrice);

// Написать конструкцию условий (расчеты приведены в рублях) 

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (15000 <= fullPrice && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (0 <= fullPrice && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else 
  console.log("Что-то пошло не так");


    