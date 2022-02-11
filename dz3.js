// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let n = 100;
let i = 3;

while (i <= n) {
    if (isNatural(i)) {
        console.log(i++)
    }
    i++;
};


function isNatural(number) {

    for (let j = 2; j <= number / 2; j++) {
        if (number % j === 0) {
            return false;
        }
    }
    return true;
};

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
const basket = [
    ['помада', 500, 2],
    ['крем для рук', 200, 3],
    ['крем для лица', 800, 1],
    ['тушь', 1000, 1]
];

function countBasketPrice(basket) {
    let totalPraice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPraice = totalPraice + basket[i][1] * basket[i][2];
    }
    return totalPraice;
}

console.log(countBasketPrice(basket));

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (let i = 0; i <= 9; console.log(i++)) { };

// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
let row = 'x';
for (let j = 0; j < 20; j++) {
    console.log(row);
    row = row + 'x'
}
