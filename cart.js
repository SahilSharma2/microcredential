var itemcount = 0;
var itemcountdisplay= document.querySelector('.items');
let addtocart = document.querySelectorAll('.add');
var cartitems = [0,0,0,0,0,0];
for(let i = 0; i <addtocart.length; i++){
  addtocart[i].addEventListener('click',function(){
     itemcount+=1;
     itemcountdisplay.innerHTML = `${itemcount}`
     cartitems[i] += 1;
  });}
var checkout = document.querySelector('.cart');
function goCheckout(){
  if(itemcount > 0){
    sessionStorage.setItem('Table',JSON.stringify(cartitems))
    checkout.href = "checkout.html";
  }else{
    alert("Nothing in cart");}}
