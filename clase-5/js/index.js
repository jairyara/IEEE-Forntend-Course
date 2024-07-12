const btnMenu = document.getElementById('menu-btn');

btnMenu.addEventListener('click', async() => {
    const module = await import('./header.js');
    module.activeMenu();
})


