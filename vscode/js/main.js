function showMenu() {
    let menu = document.querySelector(".mobile-nav")
    let layer = document.querySelector(".fade-layer")

    menu.classList.toggle("show")
    layer.classList.toggle("visible")
}

document.querySelector(".fade-layer").addEventListener("click", showMenu)
button = document.querySelector(".mobile-nav-button").addEventListener("click", showMenu)


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

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // You can handle form submission here
    console.log('Form submitted!');
});

showStep(1);


