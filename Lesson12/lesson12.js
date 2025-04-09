// Поработать с промисами сделать запрос на бэк (воспольлзоваться одной из айпишек)
// 2. Написать собственный класс Gemer, в которой будет часы проведенные в играх, никнейм, вес и все выводиться в пользователя.
// 2.1 классная работа в переписке с Юликом

function  fetchData() {
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
            .then(data => {
            return data.fact;
            });
}

getCatFact()
    .then(fact => console.log("Факт:", fact))


class Gamer {
    constructor(nickname, hoursPlayed, weight) {
        this.nickname = nickname;      // Никнейм игрока
        this.hoursPlayed = hoursPlayed; // Часы, проведенные в играх
        this.weight = weight;          // Вес игрока (в кг)

        displayInfo() {
            return `
        Никнейм: ${this.nickname}
        Часов в играх: ${this.hoursPlayed} ч
        Вес: ${this.weight} кг
        `;
        }
    }

    const player1 = new Gamer("ProGamer2000", 1500, 75);
