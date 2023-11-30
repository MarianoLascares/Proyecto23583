const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.nabvar__menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
});

function confirmarEliminacion() {
    var confirmacion = confirm('¿Estás seguro de que deseas eliminar este elemento?');
    document.getElementById('confirm').value = confirmacion;
    
    // Si se confirma, enviar el formulario
    if (confirmacion) {
        document.getElementById('deleteForm').submit();
    }
}