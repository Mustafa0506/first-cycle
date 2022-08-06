// Задания 1 \\

let num

do {
    num = prompt('Напишите число больше 100')
    if (num >= 100) {
        alert('Вы выбрал число больше 100')
    }
} while (num <= 100);

// Задания 2 \\

let arr = [4, 16, 19, 22, 11, 144, 967, 19124]

let odd = []
let even = []

arr.filter(item => {
    if (item % 2 === 0) {
        even.push(item)
    } else {
        odd.push(item)
    }
})

console.log('Задания 2', odd);
console.log('Задания 2', even);