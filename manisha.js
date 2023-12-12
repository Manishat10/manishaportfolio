/*
    Global Variables
*/
let toggleMenu = document.querySelectorAll(".navbar .toggle-menu");
let navLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links a");

/*
    Main Function
*/
function toggleLinks(ourArray, ourFubction) {
  ourArray.forEach((element) => {
    element.addEventListener("click", () => {
      ourFubction();
    });
  });
}
/*
    Show & Hide Links Sidebar
*/
function toggleNavLinks() {
  navLinks.classList.toggle("active");
}

toggleLinks(toggleMenu, toggleNavLinks);
toggleLinks(links, toggleNavLinks);
