// Урок 2

// Задание 1

let screenPrice = 10000;
let rollback = 20;

// Задание 3 

// Спрашиваем у пользователя "Как называется ваш проект?" и результат сохраняем в переменную title 
let title = prompt("Как называется ваш проект?");

// Спросить у пользователя "Какие типы экранов нужно разработать?" Сохранить в переменную screens
let screens = prompt("Какие типы экранов нужно разработать?");

// Спросить у пользователя "Сколько будет стоить данная работа?" и сохранить данные в переменной adaptive (булево значение true/false)
let adaptive = confirm("Нужен ли адаптив на сайте?");

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. "Какой дополнительный тип услуг нужен?" (Например servise1 , servise2). 2 "Сколько будет это будет стоить?" (например servicePrice1, servisePrice2)
let servise1 = prompt("Какой дополнительный тип услуг нужен?");
let servisePrice1 = +prompt("Сколько это будет стоить?");

let servise2 = prompt("Какой дополнительный тип услуг нужен?");
let servisePrice2 = +prompt("Сколько это будет стоить?");

// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servisePrice + servisePrice2) и результат занести в переменную fullPrice 
let fullPrice = screenPrice + servisePrice1 + servisePrice2;

// Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль
let servicePercentPrice = Math.ceil(fullPrice - 1500);

// Написать конструкцию условий (расчеты приведены в рублях) 

let getRollbackMessage = function(discount) {
  if (discount > 30000) {
      return "Даем скидку в 10%"
  } else if (15000 <= discount && discount <= 30000) {
        return "Даем скидку в 5%"
  } else if (0 <= discount && discount < 15000) {
        return "Скидка не предусмотрена"
  } else {
        return "Что-то пошло не так"
  }
}

// Урок 3

// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression

let getAllServicePrice = function() {
  return servisePrice1 + servisePrice2
}

let allServicePrices = getAllServicePrice(servisePrice1, servisePrice2);

// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration

function getFullPrice() {
  return screenPrice + allServicePrices
}

let fullPrice2 = getFullPrice(screenPrice, allServicePrices);

// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"

let getTitle = function() {
  let trimTitle = title.trim()
  return trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1)
}

// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)

let getServicePercentPrices = function() {
  return fullPrice2 - (fullPrice2 * rollback / 100)
}

let servicePercentPrice2 = getServicePercentPrices() 

// 5) Почистить консоль логи и добавить недостающие, должны остаться: 

let showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

showTypeOf(fullPrice2)
showTypeOf(getTitle()) 

console.log(screens);
console.log(getRollbackMessage(fullPrice2));
console.log(getServicePercentPrices());