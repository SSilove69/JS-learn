let stroke;
console.log(stroke); // undefined, так как переменная объявлена, но не инициализирована
stroke = 2;

let num1 = '9';
let num2 = 9;
console.log(typeof (num1 + num2)); // string, так как происходит конкатенация строки и числа

console.log(num1 < num2); // false, строка '9' сравнивается лексикографически с числом 9

let sum = 2;
sum += sum + parseInt(num1); // parseInt(num1) конвертирует строку '9' в число
console.log(sum); // 13

sum++;
console.log(sum); // 14

// Проверка равенства num1 и num2 через тернарный оператор
const compareResult = num1 != num2 ? 'Неравны числа' : 'Равны числа';
console.log(compareResult); // 'Неравны числа', так как '9' (строка) не равно 9 (число)

const result1 = typeof (num2 - 2); // number
console.log(result1);

const result2 = 1 + 5; // Сложение двух чисел
console.log(result2); // 6

let = 5

let age = 30;
console.log(typeof age); // "number"
