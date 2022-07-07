

let burgerIcon = document.getElementById("burgerIcon");
let navLinks = document.getElementById("navLinks");
let closeIcon = document.getElementById("closeIcon");

burgerIcon.addEventListener('click', () => {
  navLinks.style.display = "block";
  burgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  closeIcon.onclick = () => {
    navLinks.style.display = "none";
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

let allLinks = document.querySelectorAll("a");

allLinks.forEach(function (link) {
    link.target = "_blank";
})


