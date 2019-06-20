//CONSTS

const opener = document.querySelector('.lines');
const slideMenu = document.querySelector('.slide-menu');
const content = document.querySelector('.main-content');
const closer = document.querySelector('.closer');

// EVENTS

opener.addEventListener('click', openSlideMenu);
closer.addEventListener('click', closeSlideMenu);

//FUNCTIONS

function openSlideMenu() {
    slideMenu.style.width = "40%";
    content.style.marginLeft = "40%";
}

function closeSlideMenu() {
    slideMenu.style.width = "0px";
    content.style.marginLeft = "0px";
};