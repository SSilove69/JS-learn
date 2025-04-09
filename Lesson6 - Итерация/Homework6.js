
// Итерация — это процесс прохода по каждому элементу массива
// и выполнения каких-либо действий с ним.

//Функция использует map(String), что эквивалентно map(num => String(num)).
// Это преобразует каждое число в строку.

// Задание 1 Написать стрелочную функцию, которая принимает
// в себя массив чисел, и преобразует его в массив строк.

let array = [1, 2, 3, 55, 78]
let numbersToStrings = (numbers) => numbers.map(String);
console.log(array, numbersToStrings(array));

let ARA = [1, 2, 3, 45, 90, 'Sasha']
let stringsArray = ARA.map(num => String(num));
console.log(ARA, stringsArray)

// В той же функции сделать проверку, что если на вход приходит строка,
// то она остается строкой без изменения, если boolean или number,
// то преобразуется в строку
let ARA22 = [3, 6, 7, 'Саша', 'Как слолжно', 5];
let numbersToStrings1 = (numbers)  => numbers.map(String);
    numbersToStrings1 = (items) => items.map(items =>
        (typeof item === 'number' || typeof item === 'boolean'))
console.log(ARA22, numbersToStrings1(ARA22)) // Что делать?


let Lee = [5, 7, 9, 10];
let stringsLee = Lee.map(num => String(num));
console.log(stringsLee)


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

// Задание 4 с прибавлением числа на 10
let Gury = 10
function AASS() {
    if (typeof Gury !== "number") {
        return "Вы должны писать только цифры";
    }
    Gury += 10;
    return Gury;

}
console.log(AASS());
console.log(AASS());
console.log(AASS());
console.log(AASS());



































