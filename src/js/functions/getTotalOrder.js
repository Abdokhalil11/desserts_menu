function getTotalOrder() {
  const totalOrder = document.querySelector(".cart-list h2 span");
  const totalOrderPrice = document.querySelector(
    ".cart-list .content .total-order span"
  );

  totalOrder.innerHTML = `(${getTotalPrice().count})`;
  totalOrderPrice.innerHTML = `${fixed(getTotalPrice().price)}$`;
}
