let menuIcon = document.getElementById('menu-btn');
let navbar = document.querySelector('.navbar');

let plus = document.getElementById('plus-btn');
let minus = document.getElementById('minus-btn');
let quantityDisplay = document.getElementById('item-quantity-id');

const defaultQuantity = 0;

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('active');
})

plus.addEventListener('click', () =>{
    let currentQuantity = parseInt (quantityDisplay.textContent);
    quantityDisplay.textContent = currentQuantity + 1;
})

minus.addEventListener('click', () =>{
    let currentQuantity = parseInt (quantityDisplay.textContent);
    if ( currentQuantity > defaultQuantity){
        quantityDisplay.textContent = currentQuantity - 1;
    }
})
