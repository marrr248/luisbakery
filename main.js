const abrirmenu = document.getElementById('abrirmenu');
const abrirbuscar = document.getElementById('abrirbuscar');
const menu = document.getElementById('menu');
const dbuscar = document.getElementById('buscar');
const cerrarmenu = document.getElementById('cerrarmenu');
const cerrarbuscar = document.getElementById('cerrarbuscar');

abrirmenu.addEventListener('click', () => {
    menu.showModal();
});

abrirbuscar.addEventListener('click', () => {
    buscar.showModal();
});

cerrarmenu.addEventListener('click', () => {
    menu.close();
});

cerrarbuscar.addEventListener('click', () => {
    buscar.close();
});

