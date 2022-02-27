// 2. Сделать генерацию корзины динамической: верстка корзины не должна 
// находиться в HTML-структуре. Там должен быть только div, 
// в который будет вставляться корзина, сгенерированная на базе JS:
//2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const basket = {
    basketList: document.querySelector('.basket-list'),
    basketClear: document.querySelector('.basket-clear'),
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
        },
        
    ],
    init() {
        this.basketList;
        this.basketClear;
        this.basketClear.addEventListener('click', this.clearBasket.bind(this));
        this.render();
    },
   
    clearBasket() {
        this.goods = [];
        this.render();
    },
    render() {
        if (this.goods.length) {
            this.basketList.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиции(я) стоимостью ${this.countBasketPrice()}`);
        } else {
            this.basketList.textContent = 'Корзина пуста';
        }
    },

    countBasketPrice() {
        return this.goods.reduce((totalPrice, good) => totalPrice += good.price * good.quantity, 0);
    },
    
};


basket.init();
