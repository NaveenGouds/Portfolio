let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

    // Toggle display property of navbar based on its current state
    if (navbar.classList.contains('active')) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
}





