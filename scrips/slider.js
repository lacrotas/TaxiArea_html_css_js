let offset=0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-prev').addEventListener('click',function(){
 offset+=33.2;
 if(offset>0){offset=-100}
 sliderLine.style.left= offset +'%';
});

document.querySelector('.slider-next').addEventListener('click',function(){
  offset-=33.2;
 if(offset<-100){offset=0}
  sliderLine.style.left= offset +'%';
 });
