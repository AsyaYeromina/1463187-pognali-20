var body = document.querySelector(".body");
var header = document.querySelector(".header");
var burgerButton = document.querySelector(".header__burger-button");

if (body !== null && header !== null && burgerButton !== null) {

  if (body.className.indexOf("body--header-collapsed") === -1) {
    body.classList.add("body--header-modal");
  }

  burgerButton.addEventListener("click", function (evt) {
    body.classList.toggle("body--header-collapsed");
    body.classList.add("body--header-modal");

    if (body.className.indexOf("body--header-collapsed") !== -1) {
      body.classList.remove("body--header-modal");
    }
  });
}
