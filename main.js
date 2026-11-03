let menuIcon = document.getElementById('menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('active');
})