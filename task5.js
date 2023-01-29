// Задание 5.
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.

const exp = (x, n) => {
    let result;
    let y = x;
    if (n <= 0 || !Number.isInteger(x) || !Number.isInteger(n)) {
        result = "Введите натуральные числа";
    } else if (n === 1) {
        result = x;
    } else {
        for (let i = 2; i <= n; i++) {
            y *= x;
            result = y;
        }
    }
    return console.log(result);
};

exp(5, 3);
