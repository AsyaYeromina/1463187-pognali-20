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





// Body on other pages (not index) has "body--header-collapsed" class

// Class "body--header-modal" is added after JS is loaded
// if body doesn't have class "body--header-collapsed"

// Class "body--header-collapsed" is toggled after click on "header__burger-button"

// If body has class "body--header-collapsed" class "body--header-modal" is removed

// ! Next task: Class "body--header-fixed" should be added after page scrolling down and removed after scrolling to the top
