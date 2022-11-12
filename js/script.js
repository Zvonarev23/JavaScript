'use strict';

// БЛОК ОБЪЯВЛЕНИЯ ПЕРЕМЕННЫХ

let screenPrice;
let fullPrice;
let servise1; 
let servisePrice1; 
let servise2; 
let servisePrice2; 
let rollback = 20;
let title = prompt("Как называется ваш проект?", "Так и сяк");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые и сложные");
let adaptive = confirm("Нужен ли адаптив на сайте?");

// БЛОК ОПИСАНИЯ ФУНКЦИЙ

let getRollbackMessage = function(discount) {
  if (discount > 30000) {
      return "Даем скидку в 10%"
  } else if (discount >= 15000 && discount <= 30000) {
        return "Даем скидку в 5%"
  } else if (discount >= 0  && discount < 15000) {
        return "Скидка не предусмотрена"
  } else {
        return "Что-то пошло не так"
  }
}

function getFullPrice() {
  return screenPrice + allServicePrices
}

let getTitle = function() {
  let trimTitle = title.trim()
  return trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1)
}

let getServicePercentPrices = function() {
  return fullPrice - (fullPrice * rollback / 100)
}

let showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

let question = function() {
  do {
   screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice))
  return +screenPrice
}

let getAllServicePrice = function() {
  servise1 = prompt("Какой дополнительный тип услуг нужен?", "Метрика");

  do {
    servisePrice1 = prompt("Сколько это будет стоить?");
  } while (!isNumber(servisePrice1))
    servisePrice1 = +servisePrice1
  
  servise2 = prompt("Какой дополнительный тип услуг нужен?", "Модалка");

  do {
    servisePrice2 = prompt("Сколько это будет стоить?");
  } while (!isNumber(servisePrice2))
    servisePrice2 = +servisePrice2

  return servisePrice1 + servisePrice2
}

// ФУНКЦИОНАЛЬНЫЙ БЛОК

screenPrice = question();
let allServicePrices = getAllServicePrice();
fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice2 = getServicePercentPrices(); 

showTypeOf(screenPrice)
showTypeOf(fullPrice)
showTypeOf(getTitle()) 

// МУСОРНЫЙ БЛОК

console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice2);



