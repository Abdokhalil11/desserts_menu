function removeAllCartList() {
  for (let i = 0; i < cartList.length; ) {
    removeCartList(cartList[i].id);
    if (cartList.length === 0) break;
  }
}
