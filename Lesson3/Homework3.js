// Задание 1

function processString(str, callback) {
    return callback(str);
}


function reverseString(s) {
    return s.split("").reverse().join("");
}


function toUpperCase(s) {
    return s.toUpperCase();
}


function replaceSpaces(s) {
    return s.replace(/\s/g, "_");
}


console.log(processString("cut", reverseString));
console.log(processString("JavaScript", toUpperCase));
console.log(processString("hello world", replaceSpaces));

//Задание 2
function repeatAction(count, callback) {
    for (let i = 0; i < count; i++) {
        callback();
    }
}

repeatAction(6, () => console.log("Жопа!"));

let sum = 0;
repeatAction(4, () => sum += 5);
console.log(sum);