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

const infoAddress = document.querySelector('.info__address'),
    mapMobile = document.querySelector('.map__mobile');
    infoAddress.onmouseover = function(){
        mapMobile.style.display = "block";
        document.body.style.overflow = 'hidden';
        infoAddress.style.opacity = "0"; 
    };
    mapMobile.onmouseout = function(){
        mapMobile.style.display = "none";
        document.body.style.overflow = ''; 
        infoAddress.style.opacity = "1"; 
    };

/* спуск more__about */
const moreBut = document.querySelector('.about__buttons__more'),
    moreAbout = document.querySelector('.more__about');

moreBut.onmouseover = function showMoreAbout(){
    moreAbout.style.top = "10%";
    moreAbout.style.zindex = "6";
    moreBut.style.opacity = "0";
    moreAbout.style.display = "block";
    document.body.style.overflow = 'hidden'; 
};
moreBut.onmouseout = function hideMoreAbout (){
    moreAbout.style.display = "none";
    moreAbout.style.top = "-100%";
    moreBut.style.opacity = "1";
    document.body.style.overflow = '';
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