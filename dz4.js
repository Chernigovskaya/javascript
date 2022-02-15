// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


let inputNumber = parseInt(prompt('Введите число от 0 до 999'));

function numberInObject(inputNumber) {
    if (inputNumber > 0 && inputNumber < 1000) {
        return {
        'сотни':  Math.floor(inputNumber / 100), 
        'десятки': Math.floor(inputNumber / 10) % 10,
        'единицы': inputNumber % 10,
        };
    }
    else { 
       return alert('Введите число от 0 до 999')};
        
};

console.log(numberInObject(inputNumber));


// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
    goods: [
        {
            product_name: 'помада', 
            price: 500, 
            quantity: 2},
        {
            product_name: 'крем для рук', 
            price: 200, 
            quantity: 3
        },
        {
            product_name: 'крем для лица', 
            price: 800, 
            quantity: 1
        },
        {
            product_name: 'тушь', 
            price: 1000, 
            quantity: 1
        }
    ],
 
   countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
      }
    
};


console.log(basket.countBasketPrice());
