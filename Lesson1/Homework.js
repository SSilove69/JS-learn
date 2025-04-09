
let age = 30;
console.log(typeof age); // "number"

let age1 = '30';
console.log(typeof age1);

let age2 = 30;
let age3 = 5
if (age2 > age3) {
    console.log("Это правильно"); // Если age2 больше age3
} else {
    console.log("Это не правильно"); // Если age2 меньше или равно age3
}
console.log(typeof (age2 > age3));

let Veronika = null
console.log(typeof Veronika);

let Veronika1 = undefined
console.log(typeof Veronika1);

let VV = Symbol ('5225');
    console. log(typeof VV)

// Задание 3
let age18 = parseFloat(prompt("Введите ваш возраст"));
    if (age18 >= 18 && age18 <= 60)
    {console.log( "Доступ разрешен" )}
    else if (age18 < 18 ) {console.log ( "Иди нахуй малой")}
    else if (age18 > 60 ) {console.log ( "Старикам тут не место")}

    // Задание 2

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

function calculator(a, b, operation) {
    if (operation === "+" ) {return a + b }
    else if (operation === "-" ) {return a - b }
    else if (operation === "*" ) {return a * b }
    else if (operation === "/" ) {return a / b }
    else {return "operastion not find"}
}

let sum = calculator(num1, num2, '+' ); // Сложение
let difference = calculator(num1, num2, '-' ) // Вычитание
let product = calculator(num1, num2, '*' ); // Умножение
let quotient = calculator(num1, num2, '/' ) // Деление
let remainder = num1 % num2; // Остаток от деления

// Вывод результатов
console.log(`Результаты операций с числами ${num1} и ${num2}:`);
console.log(`Сложение: ${sum}`);
console.log(`Вычитание: ${difference}`);
console.log(`Умножение: ${product}`);
console.log(`Деление: ${quotient}`);
console.log(`Остаток от деления: ${remainder}`);



