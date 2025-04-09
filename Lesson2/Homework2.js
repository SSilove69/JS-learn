//Задание 1
function greet() {
    const name = prompt("Как вас зовут?");
    if (name) {
        return `Привет, ${name}!`;
    } else {return 'Привет, залупа забугорная!'}
}
console.log(greet());

let sayHello = function(name) {
    console.log("Hello, " + name);
}

let executeFunction = function(func, arg) {
    func(arg);
}

executeFunction(sayHello, "Саша"); // Hello, John

//Задание 2

function factorial(n) {
    if (n < 0) {
        return "Факториал не определён для отрицательных чисел.";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-3)); //

//Задание 3
function isPrime(num3) {
    if (num3 <= 1) {
        return false; // Числа <= 1 не являются простыми
    }
    for (let i = 2; i <= Math.sqrt(num3); i++) {
        if (num3 % i === 0) {
            return false; // Если нашелся делитель, число не простое
        }
    }
    return true; // Если делителей нет, число простое
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));
console.log(isPrime(2));

// i++ — это сокращенная запись для увеличения значения переменной i
// на единицу (инкрементация). Она используется в программировании,
//     особенно в циклах, для постепенного увеличения значения переменной.

//Задача 4
function reverseString(str) {
let  reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
return reversed;
}
console.log(reverseString("Копировать"));
console.log(reverseString ("Редактировать"));

// str.split(""):
// Преобразует строку в массив символов.
// Например, "hello" превращается в ["h", "e", "l", "l", "o"].

// reverse():
// Переворачивает массив.
// Например, ["h", "e", "l", "l", "o"] становится ["o", "l", "l", "e", "h"].

// join(""):
// Собирает перевёрнутый массив обратно в строку.
// Например, ["o", "l", "l", "e", "h"] превращается в "olleh".

//Задание 5
function calculator() {
    const operations = ['+', '-', '*', '/', '^', '%'];

    // Функция для получения корректного числа
    function getNumber(promptMessage) {

            const input = prompt(promptMessage);
            const number = parseFloat(input);
            if (!isNaN(number)) {
                return number;
            }
            alert("Ошибка: Введите корректное число!");

    }

    // Функция для получения операции
    function getOperation() {
        while (true) {
            const operation = prompt(`Введите операцию (${operations.join(", ")}):`);
            if (operations.includes(operation)) {
                return operation;
            }
            alert("Ошибка: Введите допустимую операцию!");
        }
    }

    // Получаем операцию и числа
    const operation = getOperation();
    const num1 = getNumber("Введите первое число:");
    const num2 = getNumber("Введите второе число:");

    // Выполняем операцию
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            result = num1 / num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            alert("Ошибка: Неизвестная операция!");
            return;
    }

    // Выводим результат
    alert(`Результат: ${result}`);
}

// Запуск калькулятора
calculator();