let showCart = document.getElementById("cart-el")

let quantity = 0

function addToCart() {
    quantity = 1
    console.log(quantity)
}
function addTwo() {
    quantity = 2;
    console.log(quantity);
}
function addThree() {
  quantity = 3;
  console.log(quantity);
}

function showQuantity() {
    showCart.textContent += quantity
}
function reset() {
    quantity = 0
    showCart.textContent += quantity
    console.log(quantity)
}
