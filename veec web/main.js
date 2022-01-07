
const loaderPage = document.querySelector('#loader');

window.addEventListener('load', function(){
    loaderPage.style.display = 'none';
})
// counter

jQuery(document).ready(function( $ )
{
    $('.counter').counterUp({
    delay: 10,
    time: 2000
    });
});
// sidenav active

const sideNav = document.querySelector('.side-nav-wrap');
const toggleBar = document.querySelector('.toggle-bar');

toggleBar.addEventListener('click', function(){
    sideNav.classList.toggle('active');
});

// navbar
const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    let navScroll = scrollY > 500;
    navBar.classList.toggle('active', navScroll);
});

// smooth scroll
const scroll = new SmoothScroll('.side-nav-wrap a[href*="#"]', {
    speed: 400
});

// client caousel

const clientSliders = document.querySelector('.client-wrap').children;
const clientNext = document.querySelector('.client-next');
const clientPrev = document.querySelector('.client-prev');
const clientIndicators = document.querySelector('.client-indicator').children;
let clientindex = 0;
let indicateindex = 1;

clientNext.addEventListener('click', function(){
    clientnextSlide();
    updateclientindicators()
});

clientPrev.addEventListener('click', function(){
    clientprevSlide();
    updateclientindicators()

});

function clientnextSlide() {
    if (clientindex==0) {
        clientindex=clientSliders.length-1;
    }
    else{
        clientindex--;
    }
    changeclientSlide();
}

function clientprevSlide() {
    if (clientindex==clientSliders.length-1) {
        clientindex=0;
    }
    else{
        clientindex++;
    }
    changeclientSlide();
}

function changeclientSlide() {
    for (let i = 0; i < clientSliders.length; i++) {
        clientSliders[i].classList.remove('clientactive');
    }
    clientSliders[clientindex].classList.add('clientactive');
}
changeclientSlide();

function updateclientindicators() {
    for (let i = 0; i < clientIndicators.length; i++) {
        clientIndicators[i].classList.remove('active');
    }
    clientIndicators[clientindex].classList.add('active');
}

for(let h=0; h < clientIndicators.length; h++){
    clientIndicators[h].addEventListener('click', function(){

        for (let j = 0; j < clientIndicators.length; j++) {
            clientIndicators[j].classList.remove('active');
        }
        this.classList.add('active');
        const id=this.getAttribute('data-id');
        for (let j = 0; j < clientSliders.length; j++) {
            clientSliders[j].classList.remove('clientactive');
        }
        clientSliders[id].classList.add('clientactive');
    });
}
    
// web preview

const w = document.querySelector('.work-btn1');
const p = document.querySelector('.web-preview');
const wc = document.querySelector('.web-prev-close');
const ws = document.querySelector('.web-slide').children;
const webNext = document.querySelector('.web-next');
const webPrev = document.querySelector('.web-previous');
const allBody = document.getElementsByTagName('body')[0];
let webIndex = 0;

w.addEventListener('click', function(){
    p.classList.add('active');
    allBody.style.overflowY='hidden';
});
wc.addEventListener('click', function(){
    p.classList.remove('active');
    allBody.style.overflowY='scroll';
});


// web slide

webNext.addEventListener('click', function(){
    webNextBtn();
});
webPrev.addEventListener('click', function(){
    webPrevBtn()
});

function webNextBtn() {
    if (webIndex === ws.length-1) {
        webIndex = 0;
    }else{
        webIndex++;
    }
    updateWebSlide();
}
function webPrevBtn(){
    if (webIndex === 0) {
        webIndex = ws.length-1;
    }else{
        webIndex--;
    }
    updateWebSlide();
}

function updateWebSlide(params) {
    for (let i = 0; i < ws.length; i++) {
        ws[i].classList.remove('webactive');
    }
    ws[webIndex].classList.add('webactive');
}
updateWebSlide();

const CloseInfoBtn = document.querySelectorAll('.close-webinfo-btn');
const webInfoType = document.querySelectorAll('.web-type-info');
const webInfoBrief = document.querySelectorAll('.webprev-brief');
const webInfoBtn = document.querySelectorAll('.open-webinfo-btn');

// open info
for (let h = 0; h < webInfoBtn.length; h++) {
    webInfoBtn[h].addEventListener('click', function(){
    webInfoBtn[h].style.display = 'none';
        
        const id = this.getAttribute('data-openinfo');
        
        for (let n = 0; n < webInfoType.length; n++) {
            webInfoType[n].classList.remove('active');
        }
        for (let n = 0; n < webInfoBrief.length; n++) {
            webInfoBrief[n].classList.remove('active');
        }
        webInfoType[id].classList.add('active');
        webInfoBrief[id].classList.add('active');
    });
}
// close info

for (let h = 0; h < CloseInfoBtn.length; h++) {
    CloseInfoBtn[h].addEventListener('click', function(){
        webInfoBtn[h].style.display = 'inline-block';
        
        const id = this.getAttribute('data-closeinfo');
        
        for (let n = 0; n < webInfoType.length; n++) {
            webInfoType[id].classList.remove('active');
        }
        for (let n = 0; n < webInfoBrief.length; n++) {
            webInfoBrief[id].classList.remove('active');
        }
    });
}
// work slide

const gWorkNext = document.querySelectorAll('.workbtn-next');
const gWorkPrev = document.querySelectorAll('.workbtn-prev');
const gWorkIndicate = document.querySelectorAll('.works-img-thumbs');
const gWorkIndicate1 = document.querySelectorAll('.works-img-thumbs1');
const gWorkIndicate2 = document.querySelectorAll('.works-img-thumbs2');
const grWorksView = document.querySelectorAll('.gr-works-img');
const grWorksView1 = document.querySelectorAll('.gr-works-img1');
const grWorksView2 = document.querySelectorAll('.gr-works-img2');
const closeWorkview = document.querySelectorAll('.closeWork-preview');
const workviewBtn = document.querySelectorAll('.work-btn');
const allWOrkView = document.querySelectorAll('.works-preview');
let workindicateIndex = 0;
let workindicateIndex1 = 0;
let workindicateIndex2 = 0;

// open preview

for (let w = 0; w < workviewBtn.length; w++) {
    workviewBtn[w].addEventListener('click', function(){
        const id = this.getAttribute('data-workview');

        for (let j = 0; j < allWOrkView.length; j++) {
            allWOrkView[j].classList.remove('active');    
        }
        allWOrkView[id].classList.add('active');

        allBody.style.overflowY='hidden';
    });
    
}
for (let w = 0; w < closeWorkview.length; w++) {
    closeWorkview[w].addEventListener('click', function(){
        const id = this.getAttribute('data-close-workview');

        for (let j = 0; j < allWOrkView.length; j++) {
            allWOrkView[j].classList.remove('active');
        }
        allBody.style.overflowY='scroll';
    });
    
}

for (let n = 0; n < gWorkNext.length; n++) {
    gWorkNext[n].addEventListener('click',function(){
        myWorkPreviewBtnNext();
        updateWorkIndicateSlide();
        updategrWorksView();
    });
    
}
for (let n = 0; n < gWorkPrev.length; n++) {
    gWorkPrev[n].addEventListener('click',function(){
        myWorkPreviewBtnPrev();
        updateWorkIndicateSlide();
        updategrWorksView();
    });
    
}


function myWorkPreviewBtnNext() {
    if (workindicateIndex === gWorkIndicate.length-1) {
        workindicateIndex = 0;
    }else{
        workindicateIndex++;
    }
}

function myWorkPreviewBtnPrev() {
    if (workindicateIndex === 0) {
        workindicateIndex = gWorkIndicate.length-1;
    }else{
        workindicateIndex--;
    }
}

for (let k = 0; k < gWorkIndicate.length; k++) {
    gWorkIndicate[k].addEventListener('click', function(){

        for (let t = 0; t < gWorkIndicate.length; t++) {
            gWorkIndicate[t].classList.remove('workthumbsactive');
        }
        this.classList.add('workthumbsactive');
        const id = this.getAttribute('data-workthumb');
        for (let j = 0; j < grWorksView.length; j++) {
            grWorksView[j].classList.remove('workviewactive');
        }
        grWorksView[id].classList.add('workviewactive');

    });
}

// start Slide

function updateWorkIndicateSlide() {
    for (let i = 0; i < gWorkIndicate.length; i++) {
        gWorkIndicate[i].classList.remove('workthumbsactive');
    }
    gWorkIndicate[workindicateIndex].classList.add('workthumbsactive');
}
updateWorkIndicateSlide()

function updategrWorksView() {
    for (let i = 0; i < grWorksView.length; i++) {
        grWorksView[i].classList.remove('workviewactive');
    }
    grWorksView[workindicateIndex].classList.add('workviewactive');
}
updategrWorksView();

// logo slide start
for (let w = 0; w < workviewBtn.length; w++) {
    workviewBtn[w].addEventListener('click', function(){
        const id = this.getAttribute('data-workview');

        for (let j = 0; j < allWOrkView.length; j++) {
            allWOrkView[j].classList.remove('active');    
        }
        allWOrkView[id].classList.add('active');

        allBody.style.overflowY='hidden';
    });
    
}
for (let w = 0; w < closeWorkview.length; w++) {
    closeWorkview[w].addEventListener('click', function(){
        const id = this.getAttribute('data-close-workview');

        for (let j = 0; j < allWOrkView.length; j++) {
            allWOrkView[j].classList.remove('active');
        }
        allBody.style.overflowY='scroll';
    });
    
}

for (let n = 0; n < gWorkNext.length; n++) {
    gWorkNext[n].addEventListener('click',function(){
        myWorkPreviewBtnNext1();
        updateWorkIndicateSlide1();
        updategrWorksView1();
    });
    
}
for (let n = 0; n < gWorkPrev.length; n++) {
    gWorkPrev[n].addEventListener('click',function(){
        myWorkPreviewBtnPrev1();
        updateWorkIndicateSlide1();
        updategrWorksView1();
    });
    
}


function myWorkPreviewBtnNext1() {
    if (workindicateIndex1 === gWorkIndicate1.length-1) {
        workindicateIndex1 = 0;
    }else{
        workindicateIndex1++;
    }
}

function myWorkPreviewBtnPrev1() {
    if (workindicateIndex1 === 0) {
        workindicateIndex1 = gWorkIndicate1.length-1;
    }else{
        workindicateIndex1--;
    }
}

for (let k = 0; k < gWorkIndicate1.length; k++) {
    gWorkIndicate1[k].addEventListener('click', function(){

        for (let t = 0; t < gWorkIndicate1.length; t++) {
            gWorkIndicate1[t].classList.remove('workthumbsactive1');
        }
        this.classList.add('workthumbsactive1');
        const id = this.getAttribute('data-workthumb1');
        for (let j = 0; j < grWorksView1.length; j++) {
            grWorksView1[j].classList.remove('workviewactive1');
        }
        grWorksView1[id].classList.add('workviewactive1');

    });
}

// start Slide1

function updateWorkIndicateSlide1() {
    for (let i = 0; i < gWorkIndicate1.length; i++) {
        gWorkIndicate1[i].classList.remove('workthumbsactive1');
    }
    gWorkIndicate1[workindicateIndex1].classList.add('workthumbsactive1');
}
updateWorkIndicateSlide1()

function updategrWorksView1() {
    for (let i = 0; i < grWorksView1.length; i++) {
        grWorksView1[i].classList.remove('workviewactive1');
    }
    grWorksView1[workindicateIndex1].classList.add('workviewactive1');
}
updategrWorksView1();

// cartoon slide

for (let w = 0; w < workviewBtn.length; w++) {
    workviewBtn[w].addEventListener('click', function(){
        const id = this.getAttribute('data-workview');

        for (let j = 0; j < allWOrkView.length; j++) {
            allWOrkView[j].classList.remove('active');    
        }
        allWOrkView[id].classList.add('active');

        allBody.style.overflowY='hidden';
    });
    
}
for (let w = 0; w < closeWorkview.length; w++) {
    closeWorkview[w].addEventListener('click', function(){
        const id = this.getAttribute('data-close-workview');

        for (let j = 0; j < allWOrkView.length; j++) {
            allWOrkView[j].classList.remove('active');
        }
        allBody.style.overflowY='scroll';
    });
    
}

for (let n = 0; n < gWorkNext.length; n++) {
    gWorkNext[n].addEventListener('click',function(){
        myWorkPreviewBtnNext2();
        updateWorkIndicateSlide2();
        updategrWorksView2();
    });
    
}
for (let n = 0; n < gWorkPrev.length; n++) {
    gWorkPrev[n].addEventListener('click',function(){
        myWorkPreviewBtnPrev2();
        updateWorkIndicateSlide2();
        updategrWorksView2();
    });
    
}


function myWorkPreviewBtnNext2() {
    if (workindicateIndex2 === gWorkIndicate2.length-1) {
        workindicateIndex2 = 0;
    }else{
        workindicateIndex2++;
    }
}

function myWorkPreviewBtnPrev2() {
    if (workindicateIndex2 === 0) {
        workindicateIndex2 = gWorkIndicate2.length-1;
    }else{
        workindicateIndex2--;
    }
}

for (let k = 0; k < gWorkIndicate2.length; k++) {
    gWorkIndicate2[k].addEventListener('click', function(){

        for (let t = 0; t < gWorkIndicate2.length; t++) {
            gWorkIndicate2[t].classList.remove('workthumbsactive1');
        }
        this.classList.add('workthumbsactive1');
        const id = this.getAttribute('data-workthumb2');
        for (let j = 0; j < grWorksView2.length; j++) {
            grWorksView2[j].classList.remove('workviewactive1');
        }
        grWorksView2[id].classList.add('workviewactive1');

    });
}

// start Slide2

function updateWorkIndicateSlide2() {
    for (let i = 0; i < gWorkIndicate2.length; i++) {
        gWorkIndicate2[i].classList.remove('workthumbsactive1');
    }
    gWorkIndicate2[workindicateIndex2].classList.add('workthumbsactive1');
}
updateWorkIndicateSlide2()

function updategrWorksView2() {
    for (let i = 0; i < grWorksView2.length; i++) {
        grWorksView2[i].classList.remove('workviewactive1');
    }
    grWorksView2[workindicateIndex2].classList.add('workviewactive1');
}
updategrWorksView2();





