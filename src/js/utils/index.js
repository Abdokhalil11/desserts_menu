function getTotalPrice() {
  const totalCount = cartList
    .map((el) => el.count)
    .reduce((ac, cu) => ac + cu, 0);
  const totalPrice = cartList
    .map((el) => el.count * el.price)
    .reduce((ac, cu) => ac + cu, 0);
  return {
    count: totalCount,
    price: totalPrice,
  };
}
function totalItemPrice(price, total) {
  return fixed(parseInt(price * total));
}

function fixed(number) {
  return number.toFixed(2);
}
