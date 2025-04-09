//

let array = [1, 19, 31, 6, 'papa', 'mama', ]
console.log(array.length) // длинна массива
console.log(array[4]) // поиск по индексу

array.forEach(function (elem ) {
console.log(elem * 2)
})

array = array.filter(function (elem, i  ) {
return i <= 5
})
console.log(array)
