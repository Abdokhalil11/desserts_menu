
function hideModal() {
  removeAllCartList();
  overlay.classList.remove("active");
  modal.classList.remove("active");
  orderList.innerHTML = "";
}