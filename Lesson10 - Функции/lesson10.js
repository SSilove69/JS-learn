// Функции
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 6)); // Выведет: 18

function greetUser(name) {
    console.log(`Привет, ${name}!`);
}
greetUser("Anna");

const isEven = (number) => {
    return number % 2 === 0;
};
console.log(isEven(5)); // false
console.log(isEven(6)); // true

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

// split('') — разбивает строку на массив символов: ['h', 'e', 'l', 'l', 'o'].

// reverse() — переворачивает массив: ['o', 'l', 'l', 'e', 'h'].

// join('') — объединяет элементы массива в строку: "olleh".


const users = [
    { name: 'Anna', age: 25 },
    { name: 'Alina', age: 17 },
    { name: 'Zina', age: 31 }
];

function getOldestUser(usersArray) {
    let oldestUser = usersArray[0];
    for (const user of usersArray) {
        if (user.age > oldestUser.age) {
            oldestUser = user;
        }
    }
    return oldestUser.name;
}
console.log(getOldestUser(users));

const users1 = [
    { name: 'Zhak', age: 45 },
    { name: 'Sasha', age: 17 },
    { name: 'Vasiliy', age: 31 }
];

function getYoungUser(usersArray) {
    let youngUser = usersArray[0];
    for (const user of usersArray) {
        if (user.age < youngUser.age) {
            youngUser = user
        }
    }
    return youngUser.name
}
console.log(getYoungUser(users1))

//
const book = {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949
};

console.log(book);

function printBookInfo(bookObj) {
    console.log(`Название: ${bookObj.title}, Автор: ${bookObj.author}, Год: ${bookObj.year}`);
}

// Пример вызова
printBookInfo(book); // Название: 1984, Автор: Джордж Оруэлл, Год: 1949

book.getAge = function() {
    if (!this.year) return "Год издания неизвестен";
    return new Date().getFullYear() - this.year;
};

console.log(book.getAge()); // Пример вывода: 2023 - 1949 = 74
