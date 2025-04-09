// Циклы
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 0; i -= 2) {
    console.log(i)
}

// Задани2
const fruits = ["Вишни", "Груши", "Персики"];
let  index = 0;

while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}
console.log(fruits.reverse())

const fruits2 = ["Вишни", "Груши", "Персики"];
let index1 = fruits2.length - 1;

while (index1 >= 0) {
    console.log(fruits2[index1]);
    index1--; // Уменьшаем индекс на каждой итерации
}
