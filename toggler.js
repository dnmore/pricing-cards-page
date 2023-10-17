inputElement = document.querySelector("input");
starterPriceElement = document.querySelector(".starter");
proPriceElement = document.querySelector(".pro");

inputElement.addEventListener("click", () => {
  if (inputElement.checked) {
    starterPriceElement.textContent = "$ 205";
    proPriceElement.textContent = "$ 1065";
  } else {
    starterPriceElement.textContent = "$ 19";
    proPriceElement.textContent = "$ 99";
  }
});
