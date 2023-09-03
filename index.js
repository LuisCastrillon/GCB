const menuIcon = document.querySelector('.menuDiv');
const menu = document.querySelector('.menuList')
const imgMenu = document.querySelector('.logoMenu')

menuIcon.addEventListener('click', () => {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex'
        console.log(menu.style.display)
        imgMenu.src = './img/closeMenu.png'
    }
    else{
        menu.style.display = 'none'
        console.log(menu.style.display)
        imgMenu.src = './img/menu.png'
    }
});

