// Поработать с промисами сделать запрос на бэк (воспольлзоваться одной из айпишек)
// 2. Написать собственный класс Gemer, в которой будет часы проведенные в играх, никнейм, вес и все выводиться в пользователя.
// 2.1 классная работа в переписке с Юликом

// Асинхронные функции
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные успешно загружены");
        }, 2000);
    });
}

fetchData().then(console.log);

function getCatFact() {
    return fetch('https://catfact.ninja/fact')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.fact);
}

getCatFact()
    .then(fact => console.log("Факт:", fact));

// Класс Gamer
class Gamer {
    constructor(nickname, hoursPlayed, weight) {
        this.nickname = nickname;
        this.hoursPlayed = hoursPlayed;
        this.weight = weight;
    }

    displayInfo() {
        return `
            Никнейм: ${this.nickname}
            Часов в играх: ${this.hoursPlayed} ч
            Вес: ${this.weight} кг
        `;
    }
}

const player1 = new Gamer("ProGamer2000", 1500, 75);
console.log(player1.displayInfo());
