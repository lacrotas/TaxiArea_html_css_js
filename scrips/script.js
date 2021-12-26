let authorizedCheck=false;
function changeForm(){
  const authorizationForm = document.querySelector('.modal-window__authorization')
  const registrationForm = document.querySelector('.modal-window__registration')
  if(authorizedCheck){
    authorizationForm.style.display ='none';
    registrationForm.style.display = 'block';
    authorizedCheck=false;
   }else{
    authorizationForm.style.display ='block';
    registrationForm.style.display = 'none';
    authorizedCheck=true;
   }
}
function gotoPage(hrefName){
  document.location.href = hrefName;
}
/* menu */
let hiddenCheck=false;
let selectCheck=false;
function hideForm(){
  const form = document.querySelector('.main__form')//form
  
  if(!hiddenCheck){
   form.style.top = 760+'px';
     hiddenCheck=true;
   }else{
     form.style.top = 390+'px';
     hiddenCheck=false;
   }
   console.log("sadd");
}
function hideSelect(){
  const selectForm = document.querySelector('.main__navbar--hidden');
 
 if(!selectCheck){
   selectForm.style.left = -200 +'px';
  selectCheck=true;
  }else{
   selectForm.style.left = 0+'px';
    selectCheck=false;
  }
  console.log("sad");
}