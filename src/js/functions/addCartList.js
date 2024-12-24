function addCartList() {
  const cartItems = document.querySelector(".cart-list .items");

  cartSectionInfo.innerHTML = endCartSection();
  cartItems.innerHTML = "";

  cartList.map(
    (details, i) =>
      (cartItems.innerHTML += `
    <div class="item" >
      <div>
        <div class="name">${details.name}</div>
        <div class="property"> 
          <p class="count">${details.count}x</p>
          <p class="price">@ $${fixed(details.price)}</p>
          <p class="total">$ ${totalItemPrice(details.price, details.count)}</p>
          </div>
      </div>
    <button class="close" onclick='removeCartList(${details.id})'><img src='./assets/images/close.svg'/></button>
    </div>`)
  );
  putInLocalStorage();
}
