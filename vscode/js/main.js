
// Hamburger menu:
function showMenu() {
    let menu = document.querySelector(".mobile-nav")
    let header = document.getElementById("header")
    let button = document.querySelector(".mobile-nav-button")
    let cross = document.querySelector(".mobile-nav-cross")

    header.classList.remove("header-scrolled")
    menu.classList.toggle("show")

    button.classList.toggle("hidden")
    cross.classList.toggle("hidden")
}

button = document.querySelector(".mobile-nav-button").addEventListener("click", showMenu)
cross = document.querySelector(".mobile-nav-cross").addEventListener("click", showMenu)


//Carousel (tagit insperation):
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel").querySelector("[data-slides")

        const activeSlide = slides.querySelector("[data-active")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// Blurred & transparent header:
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
    let menu = document.querySelector(".mobile-nav")

    if (scrollPosition === 0 || menu.classList.contains('show')) {
        header.classList.remove('header-scrolled');
    } else {
        header.classList.add('header-scrolled');
    }
});



// Multi-step form:
document.addEventListener('click', function (event) {
    if (event.target.matches('button[data-action="next"]')) {
        nextStep();
    } else if (event.target.matches('button[data-action="prev"]')) {
        prevStep();
    }
});

let currentStep = 1;
const form = document.getElementById('multiStepForm');
const steps = document.querySelectorAll('.step');

function showStep(stepNumber) {
    steps.forEach(step => {
        step.style.display = 'none';
    });
    document.getElementById(`step${stepNumber}`).style.display = 'block';
    currentStep = stepNumber;
}

function nextStep() {
    if (currentStep < steps.length) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

showStep(1);
