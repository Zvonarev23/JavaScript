// Задание №6

let randomNumber = function (min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let game = function (callback) {

    function bot() {
        const question = prompt("Угадай число от 1 до 100");
        
        if (question === null) {
            alert("Игра окончена");

        } else if (question < callback) {
            confirm("Загаданое число больше")

        } else if (question > callback) {
            confirm("Загаданое число меньше")

        } else if (question == callback) {
            alert("Поздравляю, Вы угадали!!!");
            game(randomNumber())

        } else if (!isNumber(question)) {
            confirm("Введите число!");
        }

        bot()
    }
    bot()
}

game(randomNumber())