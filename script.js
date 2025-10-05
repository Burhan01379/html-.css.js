const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.Control_prev');
const next_btn = document.querySelector('.Control_next');

let n = 0;
function changeslide(){
for (let i = 0; i < Array.length; index++) {
    imgs[i].Style.display ='none';
}
imgs[n].style.display ='block';
}
changeslide();

prev_btn.addeventlistener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n =Image.length - 1;
    }
    changeslide();
})
next_btn.addeventlistener('click',(e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeslide();
})
const scrollcontainer = document.querySelectorAll('.products');
for (const item of scrollcomtainer)
    item.addeventlistener('wheel',(evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.detaY;
});