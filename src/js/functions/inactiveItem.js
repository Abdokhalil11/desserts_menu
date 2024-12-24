function inactiveItem(i) {
  const dessert = document.querySelectorAll(".dessert")[i];
  const countElement = document.querySelectorAll(".countElement")[i];
  // reset the counter
  countElement && (countElement.innerHTML = 1);
  //remove active class
  dessert && dessert.classList.remove("active");
}