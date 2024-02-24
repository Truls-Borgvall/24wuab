function showMenu(){
    let menu = document.querySelector(".mobile-nav")
    let layer = document.querySelector(".fade-layer")

    menu.classList.toggle("show")
    layer.classList.toggle("visible")
}

document.querySelector(".fade-layer").addEventListener("click", showMenu)
button = document.querySelector(".mobile-nav-button").addEventListener("click",showMenu)


