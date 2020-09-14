var dropDownBlock = document.querySelector(".drop-down-country-list");
var dropDownButton = document.querySelector(".drop-down-country-list__button");

if (dropDownBlock !== null && dropDownButton !== null) {

  dropDownButton.addEventListener("click", function (evt) {
    dropDownBlock.classList.toggle("drop-down-country-list--shown");
  });
}
