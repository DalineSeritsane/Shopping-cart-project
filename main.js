document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartCount = document.querySelector('.cart-count');
    const purchaseBtn = document.querySelector('.purchase-btn');

    //function to update cart display
    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let itemCount = 0;
    
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>R${item.price}</span>
            <span>Qty: ${item.quantity}</span>
            <button class= "remove-from-cart" data-index= "${index}">Remove</button>
            <button class="increase-qty" data-index="${index}">+</button>
            <button class="decrease-qty" data-index="${index}">-</button>

             `;
             cartItemsContainer.appendChild(cartItem);
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = itemCount;
    };
    

    //function to add items to cart
    const addItemToCart = (name, price) => {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
                }
                updateCartDisplay();
};

//function to remove items from cart
   const removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartDisplay();
   };

   // function increasing item quantity
   const increaseItemQty = (index) => {
    cart[index].quantity++;
    updateCartDisplay();
    };

    // function decrease item quantity
    const decreaseItemQty = (index) => {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            } else {
                removeFromCart(index);
        }
        updateCartDisplay();
    };

    //event listeners for adding items
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addItemToCart(name, price);
            });
        });

    //event listeners for cart items container
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            removeFromCart(index);
        }
        if (e.target.classList.contains('increase-qty')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            increaseItemQty(index);
        }

        if (e.target.classList.contains('decrease-qty')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            decreaseItemQty(index);
        }
    });
    
    // event listener for purchase button
    purchaseBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Purchased!');
            cart.length = 0; //clear cart
            updateCartDisplay();
        } else {
            alert('Your cart is empty');
        }
    });
});    
