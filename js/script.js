let assets__image = document.getElementsByClassName('assets__image');
assets__image.onmousedown = () => {
    let pageX = 0;
    document.onmousemove = e => {
        if (pageX !== 0) {
            assets__image.scrollLeft = assets__image.scrollLeft + (pageX - e.pageX);
        };
        pageX = e.pageX;
    };
    assets__image.onmouseup = () => {
        document.onmousemove = null;
        assets__image.onmouseup = null;
    };

  // отменяем браузерный drag
    assets__image.ondragstart = () => {
        return false;
    };
};

let footButText=document.getElementsByClassName('footer__button__text')
    footBut=document.getElementsByClassName('footer__button'),
    footButCheck=document.getElementsByClassName('footer__button__check');

footBut.addEventListener("mouseover", function() {
    footButText.style.display="none";
    footButCheck.style.display="block";
})