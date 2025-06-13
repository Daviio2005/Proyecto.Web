const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');
const nav = document.querySelector('#nav');
const toggleMode = document.getElementById('toggle-mode');

// Abrir menú
openMenu.addEventListener('click', function () {
    const isActive = nav.classList.contains('active');

    if (isActive) {
        this.classList.remove('active');
        nav.classList.remove('active', 'visible');
    } else {
        this.classList.add('active');
        nav.classList.add('active', 'visible');
    }
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !openMenu.contains(e.target)) {
        openMenu.classList.remove('active');
        nav.classList.remove('active', 'visible');
    }
});

// Cerrar menú con la tecla Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        openMenu.classList.remove('active');
        nav.classList.remove('active', 'visible');
    }
});

// Aplicar preferencia guardada de modo oscuro
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleMode.innerHTML = '<i class="fas fa-sun"></i>';
}

// Alternar modo claro/oscuro
if (toggleMode) {
    toggleMode.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');

        toggleMode.innerHTML = isDark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}