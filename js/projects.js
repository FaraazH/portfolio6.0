//WINDOW
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);

//NAVIGATION
// let active = 0;

// for (let i = 0; i < document.links.length; i++) {
//     if(document.links[i].href === document.URL) {
//         active = i;
//     }
// }

// document.links[active].className = projectLogo.forEach(logo => logo.classList.add('logoFill'));

let projectLogo = document.querySelectorAll('.projectLogo');
let projectLogoFull = document.querySelectorAll('.projectLogoFull');

projectLogo.forEach(logo => logo.classList.add('logoFill'));
projectLogoFull.forEach(logo => logo.classList.add('logoFillFull'));


let archContainer = document.querySelector('.archContainer');
let archHover = document.querySelector('.archHover');

archContainer.addEventListener('mouseover', () => {

    archHover.classList.add('hoverFill');

});

archContainer.addEventListener('mouseleave', () => {

    archHover.classList.remove('hoverFill');

});


let chromaticContainer = document.querySelector('.chromaticContainer');
let chromaticHover = document.querySelector('.chromaticHover');

chromaticContainer.addEventListener('mouseover', () => {

    chromaticHover.classList.add('hoverFill');

});

chromaticContainer.addEventListener('mouseleave', () => {

    chromaticHover.classList.remove('hoverFill');

});

let insideContainer = document.querySelector('.insideContainer');
let insideHover = document.querySelectorAll('.insideHover');

insideContainer.addEventListener('mouseover', () => {

    insideHover.forEach(inside => inside.classList.add('hoverFill'));

});

insideContainer.addEventListener('mouseleave', () => {

    insideHover.forEach(inside => inside.classList.remove('hoverFill'));

});


let offbeatContainer = document.querySelector('.offbeatContainer');
let offbeatHover = document.querySelector('.offbeatHover');

offbeatContainer.addEventListener('mouseover', () => {

    offbeatHover.classList.add('hoverFill');

});

offbeatContainer.addEventListener('mouseleave', () => {

    offbeatHover.classList.remove('hoverFill');

});