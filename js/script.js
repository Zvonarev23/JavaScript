'use strict';

//  Урок 7 

let appData = {
    
    screenPrice: 0, 
    fullPrice: 0,
    service1: "",
    servicePrice1: 0,
    service2: "",
    servicePrice2: 0,
    rollback: 20,
    title: "", 
    screens: "",
    adaptive: true,
    allServicePrices: 0,
    servicePercentPrice2: 0,

    start: function() {
      appData.asking()
      appData.allServicePrices = appData.getAllServicePrice();
      appData.fullPrice = appData.getFullPrice();
      appData.servicePercentPrice2 = appData.getServicePercentPrices();
      appData.logger();
    },
  
    asking: function() {
      appData.title = prompt("Как называется ваш проект?", "Так и сяк");
      appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые и сложные");
  
      do {
        appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(appData.screenPrice))
  
      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getRollbackMessage: function(discount) {
      if (discount > 30000) {
          return "Даем скидку в 10%"

      } else if (discount >= 15000 && discount <= 30000) {
            return "Даем скидку в 5%"

      } else if (discount >= 0  && discount < 15000) {
            return "Скидка не предусмотрена"

      } else {
            return "Что-то пошло не так"
      }
    },

    getFullPrice: function() {
        return appData.screenPrice + appData.allServicePrices
    },

    getTitle: function() {
      let trimTitle = appData.title.trim()

      return trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1)
    },

    getServicePercentPrices: function() {
      return appData.fullPrice - (appData.fullPrice * appData.rollback / 100)
    }, 

    isNumber: function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
    },

    getAllServicePrice: function() {
      appData.service1 = prompt("Какой дополнительный тип услуг нужен?", "Метрика");

      do {
        appData.servicePrice1 = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(appData.servicePrice1))
        appData.servicePrice1 = +appData.servicePrice1
      
        appData.service2 = prompt("Какой дополнительный тип услуг нужен?", "Модалка");

      do {
        appData.servicePrice2 = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(appData.servicePrice2))
        appData.servicePrice2 = +appData.servicePrice2

      return appData.servicePrice1 + appData.servicePrice2
    },

    logger: function() {

      for (let key in appData) {
        console.log(key);
      }

      console.log(appData.getRollbackMessage(appData.fullPrice));
      console.log(appData.servicePercentPrice2);
    }
}
  
appData.start();