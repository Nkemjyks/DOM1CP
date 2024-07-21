// object cart
const cart = {
    shoes: 0,
    socks: 0,
    bags: 0,
    totalPrice: ()=>{
        let x = cart['shoes'];
        let y = cart['socks'];
        let z = cart['bags'];
        return(x*100 + y*20 + z*50);
    }
}
// var declarations total price
let tPrice = document.querySelector('#totP');
// var declarations shoe
let addShoe = document.querySelector('#shoePlus');
let remShoe = document.querySelector('#shoeMinus'); 
let shoeQty = document.querySelector('#shoeQty');
let delSh = document.querySelector('#delSh');

// var declarations socks
let addSocks = document.querySelector('#socksPlus');
let remSocks = document.querySelector('#socksMinus'); 
let shoeSocks = document.querySelector('#socksQty'); 
let delSo = document.querySelector('#delSo');


// var declarations socks
let addBag = document.querySelector('#bagPlus');
let remBag = document.querySelector('#bagMinus'); 
let shoeBag = document.querySelector('#bagQty'); 
let delBa = document.querySelector('#delBa');

// other declarations
let heartArr = document.querySelectorAll('.fa-heart');



let update = () => {
    shoeQty.textContent = cart.shoes;
    socksQty.textContent = cart.socks;
    bagQty.textContent = cart.bags;
    tPrice.textContent = cart.totalPrice();
}

// shoe +/_ operation
addShoe.addEventListener('click', ()=>{
    cart.shoes++;
    update();    
})
remShoe.addEventListener('click', () => {   
    if(cart.shoes>0){
        cart.shoes--;
        update();
    }
})

// socks +/_ operation
addSocks.addEventListener('click', ()=>{
    cart.socks++;
    update();    
})
remSocks.addEventListener('click', () => {
    if(cart.socks>0){
        cart.socks--;
        update();
    }
})

// bag +/_ operation
addBag.addEventListener('click', ()=>{
    cart.bags++;
    update();    
})
remBag.addEventListener('click', () => {
    if(cart.bags>0){
        cart.bags--;
        update();
    }
})

// delete functions
delSh.addEventListener('click', () => {
    cart.shoes = 0;
    update();
})

delSo.addEventListener('click', () => {
    cart.socks = 0;
    update();
})

delBa.addEventListener('click', () => {
    cart.bags = 0;
    update();
})

// heart ops
heartArr.forEach((e)=>{
    e.addEventListener('click', () => {
             
        if(e.style.color == 'red'){
            e.style.color = 'black';
            
        }
        else{
            e.style.color = 'red';
             
        }
    })
})
