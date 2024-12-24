
function increaseCount(i) {
  const countElement = document.querySelectorAll(".countElement")[i];
  const count = parseInt(countElement.textContent);
  const cartIndex = cartList.findIndex((el) => el.id === i);

  countElement.innerHTML = count + 1;
  cartList[cartIndex].count = cartList[cartIndex].count + 1;

  addCartList();
  getTotalOrder();
}