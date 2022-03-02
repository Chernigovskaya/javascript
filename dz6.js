"use strict";

const catalog = {
    catalogList: null,
    basket: null,
    product: [
        {
            id_product: 10,
            product_name: 'помада', 
            price: 500, 
        },
        {
            id_product: 20,
            product_name: 'крем для рук', 
            price: 200, 
        },
        {
            id_product: 30,
            product_name: 'крем для лица', 
            price: 800, 
        },
        {
            id_product: 40,
            product_name: 'тушь', 
            price: 1000, 
        }
    ],


    init(catalogList, basket) {
        this.catalogList = document.querySelector(`.${catalogList}`);
        this.basket = basket;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.product.length > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogList.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.product.find((product) => product.id_product === id_product);
        this.basket.addToBasket(productToAdd);
    },

    renderCatalogList() {
        this.catalogList.innerHTML = '';
        this.product.forEach(item => {
            this.catalogList.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">Купить</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogList.innerHTML = '';
        this.catalogList.textContent = 'Каталог пуст.';
    },
};

 const basket = {
    basketList: null,
    clearBasketButton: null,
    goods: [],
    init(basketList, clearBasketButton) {
        this.basketList = document.querySelector(`.${basketList}`);
        this.clearBasketButton = document.querySelector(`.${clearBasketButton}`);
        this.addEventHandlers();
        this.render();
    },
    addEventHandlers() {
    this.clearBasketButton.addEventListener('click', this.clearBasket.bind(this));
    },
        clearBasket() {
        this.goods = [];
        this.render();
    },
    render() {
        if (this.goods.length > 0) {
            this.renderBasketList();
        } else {
            this.renderEmptyBasket();
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка!');
        }
    },

    renderBasketList() {
        this.basketList.innerHTML = '';
        this.goods.forEach(item => {
            this.basketList.insertAdjacentHTML('beforeend', this.renderBasketItem(item));
        })
        this.cost();
    },
    renderEmptyBasket() {
        this.basketList.innerHTML = '';
        this.basketList.textContent = 'Корзина пуста';
    },
    cost() {
        if (this.goods.length) {
            this.basketList.insertAdjacentHTML('beforeend', `Стоимость товаров составила ${this.countBasketPrice()} руб.`); 
        }
    },
    countBasketPrice() {
        return this.goods.reduce((totalPrice, good) => totalPrice += good.price * good.quantity, 0);
    },

    renderBasketItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};


catalog.init('catalog', basket);
basket.init('basket', 'basket-clear');
