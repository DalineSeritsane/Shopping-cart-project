let openShopping = document.querySelector('shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {id: 1, name: 'Nike Dunk high Retro', 
    image: 'img3.png'
    price: 1799
 },

     {id: 2, name: 'Nike high ankle', 
    image: 'img5.webp'
    price: 2999
 },

   {id: 3, name: 'Nike Air force 1', 
    image: 'img2.png'
    price: 3499
 },

 {id: 4, name: 'Nike Air Force 1 Trainer', 
    image: 'img7.webp'
    price: 4999
 },

 {id: 5, name: 'Nike Dunk Hi Retro', 
    image: 'img4.png'
    price: 5599
 },

 {id: 6, name: 'Nike Jordan high Travis Scott', 
    image: 'img1.png'
    price: 6999
 },
];

let listCard = [];
function initApp(){
    products.forEach((value,key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <imag scr= "image/R{value.image}">
        
        
        
        
        
        `

    })
}