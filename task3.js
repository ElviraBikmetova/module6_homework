// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

let sum;
function getNumReturnFunc(num1) {
    return function(num2) {
        sum = num1 + num2;
        return sum;
    }
}

console.log(getNumReturnFunc(1)(2));