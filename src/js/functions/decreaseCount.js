function decreaseCount(i) {
  const countElement = document.querySelectorAll(".countElement")[i];
  const count = parseInt(countElement.textContent);
  const cartIndex = cartList.findIndex((el) => el.id === i);

  // rest
  if (count == 1) {
    inactiveItem(i);
    removeCartList(cartIndex);
    return;
  }

  countElement.innerHTML = count - 1;
  cartList[cartIndex].count = cartList[cartIndex].count - 1;

  addCartList();
  getTotalOrder();
}
