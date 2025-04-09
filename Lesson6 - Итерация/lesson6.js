//Урок 5
let kak = ['Sasha', 'Veronika', 'Vity', 1]
console.log(kak[0])

const newKak = kak.filter((item, i) => i <= 0)
console.log(kak, newKak)

// kak = kak.map(num => num * 2 )
// console.log(kak)

kak = kak.map(num => {
    if (typeof num === "string"){
        return "Это текст"
    } else {
        return num * 2
    }
} )

console.log(kak)

//задание 2

let mama = [11, 3, 45, 99, 6, 80, 'Artym']
const Newarry = mama.map( (num) =>  {
    if (typeof num === 'string') {
        return "Это строка"
    }
    if (num >= 50 ) {
        return num * 3
    } else if (num > 0 && num < 50) {
        return  num - 3
    }
}
)
console.log(Newarry, mama)

//
const reternNum = (num) => (num)
console.log(reternNum(2))



const reternString = (string) => (string)
console.log(reternString('Sasha'))

// 5 задач на функции