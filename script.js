var totalPrice = 0;

var totalPriceElement = document.getElementById("total-price");

var addToCartButtons = document.getElementsByClassName("add-to-cart");

for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].onclick = function () {
    var product = this.parentElement;
    var price = Number(
      product.getElementsByClassName("product-price")[0].textContent
    );
    totalPrice += price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
  };
}

document.getElementById("clear-cart").onclick = function () {
  totalPrice = 0;
  totalPriceElement.textContent = totalPrice.toFixed(2);
};
