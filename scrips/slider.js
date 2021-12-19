let offset=0;
const sliderLine = document.querySelector('.slider-line')
const form = document.querySelector('.main__form')//form
let hiddenCheck=false;
const selectForm = document.querySelector('.main__navbar--hidden');
let selectCheck=false;

document.querySelector('.slider-prev').addEventListener('click',function(){
 offset+=getStep();
 if(offset>0){offset=-100}
 sliderLine.style.left= offset +'%';
 console.log(window.screen.width);
});

document.querySelector('.slider-next').addEventListener('click',function(){
  offset-=getStep();
 if(offset<-100){offset=0}
  sliderLine.style.left= offset +'%';
 });

 function getStep(){
   if(window.screen.width>1200){
     return 33.2;
   }
   if(window.screen.width<1200 && window.screen.width>800){
    return 50;
  }
  if(window.screen.width<800){
    return 100;
  }
 }

 function hideForm(){
   if(!hiddenCheck){
    form.style.top = 760+'px';
      hiddenCheck=true;
    }else{
      form.style.top = 390+'px';
      hiddenCheck=false;
    }
    console.log("sad");
}
function hideSelect(){
  if(!selectCheck){
    selectForm.style.left = -200 +'px';
   selectCheck=true;
   }else{
    selectForm.style.left = 0+'px';
     selectCheck=false;
   }
   console.log("sad");
}
// document.querySelector('.main__button--disable').addEventListener('click',function(){
//   offset-=getStep();
//  if(offset<-100){offset=0}
//   sliderLine.style.left= offset +'%';
//  });