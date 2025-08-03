const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// Array of images with their sources and titles for the slider

const images = [
{ src: 'Images/1753722671225.png', title: 'IKIGAI' },
{ src: 'Images/1753722671196.png', title: 'Think & Grow Rich' },
{ src: 'Images/1753722671203.png', title: 'The Phychology Of Money' },
{ src: 'Images/1753722671245.png', title: 'The Alchemist' },
{ src: 'Images/1753722671238.png', title: 'Rich Dad Poor Dad' }
];

let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-container');
const imageTitle = document.getElementById('image-title');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; 
    imageTitle.textContent = images[currentIndex].title;
}

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});


// Form validation function

function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    if (name.value.trim() === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone.value)) {
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    if (message.value.trim() === "") {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    return isValid;
}