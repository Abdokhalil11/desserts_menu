function checkLocalStorage() {
  if (localStorage.cartList) {
    const cartListLocalStorage = JSON.parse(localStorage.getItem("cartList"));
    if (cartListLocalStorage.length >= 1) {
      cartListLocalStorage.map((el) => (allData[el.id].count = el.count));
      return cartListLocalStorage;
    }
  } else {
    localStorage.setItem("cartList", "[]");
  }
}
