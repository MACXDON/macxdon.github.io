let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    let navList = document.querySelector('.nav');

    if (navList.style.display === 'none') {
        navList.style.display = 'block'
    } else {
        navList.style.display = 'none';
    }
})
