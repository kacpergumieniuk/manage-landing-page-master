const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.nav-menu');
const background = document.querySelector('.background')
const sections = document.querySelector('.sections')
const button = document.querySelectorAll('.button')
const people = document.querySelector('.people')
const section = document.querySelectorAll('.section')
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const body = document.getElementsByTagName("BODY")[0];
const desktopLeftArrow = document.getElementById('desktop-arrow-left');
const desktopRightArrow = document.getElementById('desktop-arrow-right');

//


let state = 0;
hamburger.addEventListener('click' , () => {
    if(state === 0){
        menu.classList.toggle('active');
        background.classList.toggle('b-active');
        hamburger.src = '/images/icon-close.svg'
        state++;
    }
    else if(state === 1){
        background.classList.toggle('b-active');
        menu.classList.toggle('active');
        hamburger.src = '/images/icon-hamburger.svg';
        state--;
    }

})




let counter = 1;

arrowRight.addEventListener('click', () => {
    if(counter === 4){
        return '';
    }
    let size = -100 * counter;
    sections.style.transform =  `translateX(${size}%)`;
    counter++;
    initPoints();
    
})

arrowLeft.addEventListener('click', () => {
    if(counter === 1){
        return '';
    }
    let size = (-100 * counter) + 200;
    sections.style.transform =  `translateX(${size}%)`;
    counter--;
    initPoints();
    
})


function initPoints(){
    if(counter === 1){
        document.getElementById('point1').style = `background-color: hsl(12, 97%, 72%);`
        document.getElementById('point2').style = `background-color: none;`
        document.getElementById('point3').style = `background-color: none;`
        document.getElementById('point4').style = `background-color: none;`
    }
    else if(counter === 2){
        document.getElementById('point1').style = `background-color: none;`
        document.getElementById('point2').style = `background-color: hsl(12, 97%, 72%);`
        document.getElementById('point3').style = `background-color: none;`
        document.getElementById('point4').style = `background-color: none;`
    }
    else if(counter === 3){
        document.getElementById('point1').style = `background-color: none;`
        document.getElementById('point2').style = `background-color: none;`
        document.getElementById('point3').style = `background-color: hsl(12, 97%, 72%);`
        document.getElementById('point4').style = `background-color: none;`
    }
    else if(counter === 4){
        document.getElementById('point1').style = `background-color: none;`
        document.getElementById('point2').style = `background-color: none;`
        document.getElementById('point3').style = `background-color: none;`
        document.getElementById('point4').style = `background-color: hsl(12, 97%, 72%);`
    }
}

initPoints()



desktopRightArrow.addEventListener('click' , ()=> {
    sections.style.transform =  `translateX(-100%)`;
})

desktopLeftArrow.addEventListener('click' , ()=> {
    sections.style.transform =  `translateX(0%)`;

})