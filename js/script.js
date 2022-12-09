'use strict';

//  Урок 8 

let appData = {
    
    screenPrice: 0, 
    fullPrice: 0,
    service1: "",
    servicePrice1: 0,
    service2: "",
    servicePrice2: 0,
    rollback: 20,
    title: "", 
    screens: [],
    adaptive: true,
    allServicePrices: 0,
    servicePercentPrice2: 0,
		services: {},

    start: function() {
      appData.asking();
			appData.addPrices();
      appData.getFullPrice();
      appData.getServicePercentPrices();
      appData.getTitle();

      appData.logger();
    },
  
    asking: function() {
			do {
				appData.title = prompt("Как называется ваш проект?", "Так и сяк");
			} while (appData.isNumber(appData.title))

			for (let i = 0; i < 2; i++) {
				let price = 0;
				let service = ""; 
				
			do {
				service = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isNumber(service))

			do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price))
				
			appData.screens.push({id: i, service: service, price: +price})
			}

			for (let i = 0; i < 2; i++) {
				let service = "";
				let price = 0;

			do {
				service = prompt("Какой дополнительный тип услуг нужен?", "Метрика");
			} while (appData.isNumber(service))		

			do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price))

			appData.services[i + "." + " " + service] = +price
			}

      appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

		addPrices: function() {
			appData.screenPrice = appData.screens.reduce(function(sum, item) {
				return sum + item.price
			}, 0)

			for (let key in appData.services) {
				appData.allServicePrices += appData.services[key]
			}
				return appData.allServicePrices
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
      appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },

    getTitle: function() {
      let trimTitle = appData.title.trim()

      appData.title = trimTitle[0].toUpperCase() + trimTitle.toLowerCase().slice(1)
    },

    getServicePercentPrices: function() {
      appData.servicePercentPrice2 = appData.fullPrice - (appData.fullPrice * appData.rollback / 100)
    }, 

    isNumber: function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
    },

    logger: function() {

      for (let key in appData) {
        console.log(key);
      }

      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice2);
      console.log(appData.screens);
    }
}
  
appData.start();


