let aboutMeButton = document.querySelector('.about-me');
let contactButton = document.querySelector('.contact');
let projectsButton = document.querySelector('.projects');

let content = document.querySelector('.content');
let contactPage = document.querySelector('.contact-page');
let projectPage = document.querySelector('.project-page');

aboutMeButton.addEventListener('click', () => {
    content.style.display = 'block';
    projectPage.style.display = 'none';
    contactPage.style.display = 'none';
})

contactButton.addEventListener('click', () => {
    content.style.display = 'none';
    projectPage.style.display = 'none';
    contactPage.style.display = 'block';
})

projectsButton.addEventListener('click', () => {
    content.style.display = 'none';
    contactPage.style.display = 'none';
    projectPage.style.display = 'block';
})

