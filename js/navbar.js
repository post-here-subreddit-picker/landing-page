const menuIcon = document.querySelector(".hambg-menu");
const navbar = document.querySelector(".navbar")
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
})