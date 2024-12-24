function confirmOrder() {
  showModal();
  orderList.innerHTML = "";

  orderList.innerHTML += cartList.map(
    (el) => `
  <div class="order">
    <div class="image">
      <img src='${el.image.thumbnail}' />
      </div>
      <div class="info">
        <p class="name">${el.name}</p>
        <p><span>${el.count}X</span><span>@ $${fixed(el.price)}</span></p>
      </div>
      <div class="total-price">$ ${totalItemPrice(el.price, el.count)}</div>
      </div>`
  );
  orderList.innerHTML += `
    <div class='total-order'>
      <p>Order Total
        <span class='total'>${fixed(getTotalPrice().price)}$</span>
      </p>
    </div>
  `;
}
