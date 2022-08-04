/* Разворачивание cases */
let caseBut = document.querySelector('.case__button'),
    cases = document.querySelector('.cases');

caseBut.addEventListener('click', () =>{
    caseBut.style.display = "none";
    cases.style.height = "1950px";
})

/* спуск more__about */
let moreBut = document.querySelector('.about__buttons__more'),
    moreAbout = document.querySelector('.more__about');

moreBut.onmouseover = function (){
    moreAbout.style.position = "static";
}
moreBut.onmouseout = function (){
    moreAbout.style.position = "absolute";
    moreAbout.style.top = "-100%";
}

/* появление cases__full */
let linkImg = document.querySelectorAll('.link__img'),
    casesFull = document.querySelector('.cases__full'),
    fullButton = document.querySelector('.full__button ');

linkImg.forEach(function (e){
    e.addEventListener('click', () =>{
        casesFull.style.opacity = "1";
    });
});

fullButton.addEventListener('click', () =>{
    casesFull.style.opacity = "0";
})
