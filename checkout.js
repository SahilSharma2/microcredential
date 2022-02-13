var sessionString = sessionStorage.getItem('Table');
var checkoutItems = JSON.parse(sessionString);
document.getElementById('disc').innerHTML = checkoutItems[0].toString();
document.getElementById('xsx').innerHTML = checkoutItems[1].toString();
document.getElementById('oled').innerHTML = checkoutItems[2].toString();
document.getElementById('digi').innerHTML = checkoutItems[3].toString();
document.getElementById('XSS').innerHTML = checkoutItems[4].toString();
document.getElementById('lite').innerHTML = checkoutItems[5].toString();
var price = (checkoutItems[0] * 499.99) +(checkoutItems[1] * 499.99)+(checkoutItems[2] * 349.99) +(checkoutItems[3] * 399.99)+ (checkoutItems[4] * 299.99)+(checkoutItems[5] * 199.99);
document.getElementById('Sub-total').innerHTML = "Sub Total:$"+price.toString();
document.getElementById('Taxes').innerHTML = "Taxes:$"+(Math.round(100*(price*0.08875))/100).toString();
document.getElementById('Total').innerHTML = 'Total:$'+(Math.round(100*(price*1.08875))/100).toString();
var checkout1js = document.querySelector(".checkout1");
checkout1js.addEventListener("click",function(){
  alert(`Checkout for $${(Math.round(100*(price*1.08875))/100)}!`)});
