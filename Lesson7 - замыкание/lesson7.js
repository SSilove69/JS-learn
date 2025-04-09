 const obj = {
    name: 'John'
}

function sayName(greeting) {
    console.log(`${greeting} ${this.name}`);
}

sayName.apply(obj, ['Hello']); // выводит 'Hello John'

 const player = {
     name: 'Red',
     jump: '35'
 };
  function intruduce(greeting) {
console.log(`${greeting}, меня зовут ${this.name},  я прыгаю на ${this.jump}см.`);
  }
 intruduce.call(player, 'Привет');
intruduce.apply(player, ['Hello']);
const intruducePlayer = intruduce.bind(player, `Хей`);
intruducePlayer();

//
let age = 17
 if( age >= 18) {
     console.log("Ты взрослый");
 }
 else {
     console.log("Ты пиздюк");
 }

 // Задание:
 // Напиши функцию checkNumber, которая принимает число и возвращает:
 // "Четное положительное", если число четное и больше 0,
 // "Нечетное положительное", если число нечетное и больше 0,
 // "Отрицательное", если число меньше 0,
 // "Ноль", если число равно 0.
// Напиши код, который проверяет, является ли число четным.
 // Используй переменную number и условный оператор if. Подсказка:
 // четное число делится на 2 без остатка (используй оператор %).
 let Chislo = 21
 if ( Chislo % 2 === 0) {
     console.log("Четное");
 } else {
     console.log("Нечетное")
 }

 function  checkEvenOdd(number) {
     if ( number % 2 === 0) {
         return ("Четное");
     } else {
         return ("Нечетное")
     }
 }
 console.log( checkEvenOdd(3));
 console.log( checkEvenOdd(6));

 // Напиши функцию isPositive, которая принимает число и возвращает:
 // "Положительное", если число > 0,
 // "Отрицательное", если число < 0,
 // "Ноль", если число = 0.
 function isPositive(number) {
     if ( number > 0) {
         return ("Положительное");
     }
     else if (number < 0){
         return ("Отрицательное");
     }
     else {
         return ("Ноль");
     }
 }
console.log(isPositive(2));
 console.log(isPositive(0));
 console.log(isPositive(-1));

 function checkAge(number) {
     if (number < 18) {
         return "Ребенок";
     } else if (number <= 65) { // Учитываем 18-65 (включительно)
         return "Взрослый";
     } else {
         return "Пенсионер";
     }
 }

 console.log(checkAge(6));
 console.log(checkAge(18));
 console.log(checkAge(76));

 // Напиши функцию getDayName, которая принимает число от 1 до 7 и возвращает
 // название дня недели:
 // 1 → "Понедельник",
 // 2 → "Вторник",
 // ...
 // 7 → "Воскресенье".
 const dayName = {
     1: "Понедельник",
     2: "Вторник",
     3: "Среда",
     4: "Четверг",
     5: "Пятница",
     6:"Суббота",
     7:"Воскресенье",
 }
 function getDayName(number) {
if ( number >= 1 && number <= 7) {
    return dayName[number];
     } else {
    return "Такого числа нет"
     }
 }
 console.log(getDayName(1));
 console.log(getDayName(-1));
 console.log(getDayName(8));

 const season = {
     1: "Зима",
     2: "Зима",
     3: "Весна",
     4: "Весна",
     5: "Весна",
     6: "Лето",
     7: "Лето",
     8: "Лето",
     9: "Осень",
     10: "Осень",
     11: "Осень",
     12: "Зима"
      }
 function getSeason(monthNumber) {
     if ( monthNumber >= 1 && monthNumber <= 12) {
         return season[monthNumber];
     } else {
         return "Такого месяца нет"
     }
 }
 console.log(getSeason(2));
 console.log(getSeason(-1));
 console.log(getSeason(18));


 function pigBit(str) {
     const array = str.split(" ")
     console.log(array)
     const newArray = array.map( item => {
         const fisterLetter = item[0];
         if ( item === "!" || item === "?" || item === "." || item === "," ){
             return item;
         }
         return item.slice(1) + fisterLetter + "ay"

     })
     return newArray.join(" ")
     }
 console.log(pigBit("Саша бегает быстро !"))

