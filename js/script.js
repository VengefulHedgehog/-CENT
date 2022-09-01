/* Раскрытие бургера */
const headBurger = document.querySelector('.header__burger'),
    headMenu = document.querySelector('.header__menu');
    headBurger.addEventListener('click', () =>{
        headBurger.classList.toggle('active');
        headMenu.classList.toggle('active');
        document.body.classList.toggle('hidden');
    });
/* Разворачивание cases */
const caseBut = document.querySelector('.case__button'),
    cases = document.querySelector('.cases');

caseBut.addEventListener('click', () =>{
    caseBut.style.display = "none";
    cases.style.height = "auto";
});

/* спуск more__about */
const moreBut = document.querySelector('.about__buttons__more'),
    moreAbout = document.querySelector('.more__about');

moreBut.onmouseover = function (){
    moreAbout.style.top = "150px";
    moreAbout.style.zindex = "6";
    moreBut.style.opacity = "0";
};
moreBut.onmouseout = function (){
    moreAbout.style.top = "-100%";
    moreBut.style.opacity = "1";
};

/* появление cases__full */
const casesTrigger = document.querySelectorAll('.link__img'),
    casesFull = document.querySelector('.cases__full'),
    casesClose = document.querySelector('.full__button ');

casesTrigger.forEach(btn =>{
    btn.addEventListener('click', () =>{
        casesFull.classList.add('show');
        casesFull.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
});

casesClose.addEventListener('click', () =>{
    casesFull.classList.remove('show');
    casesFull.classList.add('hide');
    document.body.style.overflow = '';
});