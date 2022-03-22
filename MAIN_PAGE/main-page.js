let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    let navList = document.querySelector('.nav');

    if (navList.style.display === 'none') {
        navList.style.display = 'block'
    } else {
        navList.style.display = 'none';
    }
})

let emailDisplay = document.querySelector('.email-display');
let emailExit = document.querySelector('.exit-email-form');

const emailFormDisplayToggle = () => {
    let emailForm = document.querySelector('#email-submission-form');

    if(emailForm.style.display === 'none') {
        emailForm.style.display = 'block';
    } else {
        emailForm.style.display = 'none'
    }
}

emailDisplay.addEventListener('click', emailFormDisplayToggle)

emailExit.addEventListener('click', emailFormDisplayToggle)