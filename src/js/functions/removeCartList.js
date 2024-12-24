function removeCartList(id) {
  const index = cartList.findIndex((el) => el.id == id);

  cartList.splice(index, 1);

  addCartList();

  inactiveItem(id);

  getTotalOrder();

  if (cartList.length == 0) {
    cartSectionInfo.innerHTML = emptyCartSection();
  }
}
