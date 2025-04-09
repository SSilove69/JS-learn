
// Задача 3 аписать функцию filterLongWords, которая на вход принимает коллбэк функцию, которую мы писали в пунктах 1 и 2,  и функция
// filterLongWords фильтрует строки из коллбэка
// по длине символов не более 5.

let A1 = [2, 4, 5, 98, "Sasha", false, 'Al123456', 'BaBa']
function ZZ() {
    return A1;
}
function filterLongWords (callback) {
   let A1 = callback();
   return A1.filter(item => typeof item === 'string' && item.length <= 5);
}
console.log(filterLongWords(ZZ))


//
let SA2 = [67, 67, 6868, 689, 6879, 'SASHA', "Innnnnaaaa",]
function ZSA2() {
    return SA2;
}
function Zalypa (callback) {
    let SA2 = callback();
    return SA2.filter(item => typeof item === 'string' && item.length <= 5);
}
console.log(Zalypa(ZSA2))


// 5 и 6 тема: Объекты и массивы
let person = {
    name: "Sasha",
    age: 28,
    isWork: true,
    sayHi: function() {
        console.log("Hi!");
    }
};
console.log(person.name);
console.log(person["age"]);

delete person.isWork
console.log(person)

person.sayHi()

//Массив
let arr = [45, 67, 89, 96];
arr[3] = 6
console.log(arr[3]);
console.log(arr.length);

//
let matrix = [
    [1, 3, 5,],
    [3, 4, 7,],
    [8, 9, 10]
];
console.log(matrix[1], matrix[2],)

// Как перебрать двумерный массив?
for (let i = 0; i < matrix.length; i++) { // Проходим по строкам
    for (let j = 0; j < matrix[i].length; j++) { // Проходим по столбцам
        console.log(matrix[i][j]); // Выводим элемент
    }
}

// acc — это аккумулятор, то есть переменная, которая накапливает
// итоговое значение в процессе выполнения reduce().


// Homework с массивами
const people = [
    {
        name: "Alex",
        age: 32,
        occupation: "novice developer",
    },
    {
        name: "Veronika",
        age: 20,
        occupation: "teacher",
    },
    {
        name: "Yulik",
        age: 29,
        occupation: "Frontend developer",
    },
    {
        name: "Artym",
        age: 10,
        occupation: "student",
    },
];
const oldeThan20 = people
    .filter(person => person.age > 20);
people.sort((a, b) => a.age - b.age);
console.log(oldeThan20);

























