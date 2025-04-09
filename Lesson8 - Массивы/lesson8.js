// Массив
const colors = ["blue", "red", "yellow"]
console.log(colors[1]);

const animals = ["pig", "elephant", "rhinoceros", "fish"]
console.log(animals[animals.length - 1]);

let cars = ["Toyota", "BMW", "Tesla", "Ford", "Honda"];
cars.push("Audi");
cars.push("Lada");
cars.push("Volvo");
cars = cars.filter( car => car !== "Tesla" );
cars.splice(1, 1);
console.log(cars)

const frutce = ["Яблоко", "Груша", "Слива"];
frutce.splice(1, 1, "Апельсин")
console.log(frutce)

const drinks = ["Кофе", "Чай", "Сок"];
drinks.splice(2,1, "Какао");
console.log(drinks)

const frutce1 = ["Яблоко", "Груша", "Слива"];
frutce1.splice(1, 1, "Апельсин", "Манго")
console.log(frutce1)

let peopl = [{
 name: 'Valy',
    age: 23
}, {
    name: 'Katy',
    age: 36
}, {
    name: 'Nady',
    age: 16
},
]
peopl = peopl.filter( item => item.age > 18 )
console.log(peopl)