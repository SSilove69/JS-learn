
// Итерация — это процесс прохода по каждому элементу массива
// и выполнения каких-либо действий с ним.

//Колбэк — это функция, которая передаётся в другую функцию
// в качестве аргумента и вызывается внутри неё.

// Задание 1

let array = [1, 2, 4, 6]
let array2 = ['a', 'b', 'c']
function processArray(arr, callback) {
    return arr.map(callback);
}
console.log( processArray(array, num => num * 2));

console.log(processArray(array2, char => char.toUpperCase()));

// arr — массив.
//Что делает processArray(arr, callback)?
//  Принимает массив arr.
// Принимает функцию callback, которая применяется к каждому элементу массива.
// Возвращает новый массив с результатами выполнения callback для каждого элемента.

//Задание 2
function filterArray(arr, callback) {
    return arr.filter(callback)
}
console.log(filterArray(array, num => num > 2));
console.log(filterArray(array2, word => word.startsWith('c')));

//Задание 3

function countByCondition(arr, callback) {
return arr.filter(callback).length
}
console.log(countByCondition( array, num => ((num % 2 === 0)) || (num % 2 === 1)));
console.log(countByCondition(array2, word => word.includes("a")));