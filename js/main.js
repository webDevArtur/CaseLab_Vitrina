const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
    // Проверяем, есть ли товар уже в корзине по productId
    const isProductInCart = order.some(item => item.id === productId);
    const productToAdd = products.find(item => item.id === productId);

    if (isProductInCart) {
        // Если товар уже в корзине, выдаем сообщение
        alert(`"${productToAdd.title}" уже есть в корзине`);
    }
    // TODO: если товар еще не в корзине, добавить его из массива products
    else {
        // На счёт иммутабельности не уверен, но думаю, что можно было так:
        /*  const newOrder = [...order, productToAdd];
            order = newOrder;
            ИЛИ
            order = order.concat(productToAdd);
        */
        order.push(productToAdd);
    }
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    order = order.filter(function (elem) {
        return elem.id !== productId;
        }
    );
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    // TODO: опишите функционал подсчета общей стоимости заказа
    let totalPrice = 0;
    order.forEach(elem => {
            totalPrice += elem.price;
        }
    );
    
    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}