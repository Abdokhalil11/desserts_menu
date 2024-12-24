function activeItem(i) {
  const dessert = document.querySelectorAll(".dessert")[i];
  //add active class
  dessert.classList.add("active");
  cartList.push(allData[i]);
  // add item to shop cart
  addCartList();
  getTotalOrder();
}
