const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.nabvar__menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
});