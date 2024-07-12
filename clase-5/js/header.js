let btnMenu = document.getElementById('menu-btn');
let menu = document.querySelector('#menu-container');

export const activeMenu = () => {
    if(!menu.classList.contains('menu-active')) {
        menu.classList.add('menu-active');
        btnMenu.classList.add('close');
    } else {
        menu.classList.remove('menu-active')
        btnMenu.classList.remove('close')
    }
}

