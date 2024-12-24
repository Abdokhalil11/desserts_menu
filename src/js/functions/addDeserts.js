var dessertsContent = document.querySelector(".desserts .content"),
  cartSectionInfo = document.querySelector(".cart-list .content"),
  modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  hideModalBtn = document.querySelector("button.hide-modal"),
  orderList = document.querySelector(".modal .order-list .orders");
let allData = [];
let cartList = [];

function addDeserts(data) {
  allData = data.map((el) => {
    return { ...el, count: 1 };
  });
  const localStorageDate = checkLocalStorage();
  dessertsContent.innerHTML = "";
  allData.map((detail) => {
    dessertsContent.innerHTML += `<div class="dessert">
      <div class='image'>
        <img loading='lazy' src="${detail.image.desktop}" />
      </div>
      <div class="addCart" >
        <div class="wrapper">
          <div class="cart" onclick='activeItem(${detail.id})'>
            <img src="./assets/images/cart.svg"/>
            <p>Add to Cart</p>
          </div>
          <div class="count">
            <button class='increase' onclick='increaseCount(${detail.id})'><img src='./assets/images/increase.svg'/></button>
            <p class='countElement'>${detail.count}</p>
            <button class='decrease' onclick='decreaseCount(${detail.id})'><img src='./assets/images/decrease.svg'/></button>
          </div>
        </div>
      </div>
      <div class="text">
        <span class="cat">${detail.category}</span>
        <h3 class="name">${detail.name}</h3>
        <p class="price">$${fixed(detail.price)}</p>
      </div>
    </div>`;
  });
  if (localStorageDate) {
    localStorageDate.map((el) => activeItem(el.id));
    cartList = localStorageDate;
  }
}

function endCartSection() {
  return ` 
  <div class="total-order">
    <p>order total<span>0.0</span></p>
  </div>
  <div class="carbon">
    <img src="./assets/images/tree.svg" />
    <p>This is a <span>carbon-neutral </span>delivery</p>
  </div>
  <button class="submit" onclick='confirmOrder()'>Confirm Order</button>`;
}

function emptyCartSection() {
  return `<div class='content-1'><img src="./assets/images/cake.svg"><p>Your added items will appear here</p></div>`;
}

hideModalBtn.addEventListener("click", hideModal);
