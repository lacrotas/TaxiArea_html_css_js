const userHeaderActive = document.querySelector('.header__authorization-active')
const userHeaderDisable = document.querySelector('.header__authorization-disable')
let authorized=false;

 function authorization(){
   if(authorized){
    userHeaderDisable.style.display ='none';
    userHeaderActive.style.display = 'block';
    authorized=false;
   }else{
   userHeaderDisable.style.display ='block';
   userHeaderActive.style.display = 'none';
   authorized=true;
   }
}
function gotoPage(hrefName){
  document.location.href = hrefName;
}