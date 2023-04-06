let menu = document.querySelector(".nav_links")
let hambergerMenu = document.querySelector(".nav_hamburger")


hambergerMenu.addEventListener("click", ()=> {
    hambergerMenu.classList.toggle("active")
    menu.classList.toggle("active")
})