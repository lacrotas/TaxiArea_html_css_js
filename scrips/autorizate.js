const admin={name:'admin',password:1111,role:'admin'}

function logIn(){
    let users = JSON.parse(localStorage.getItem('userData') || "[]");
    const loginInput = document.querySelector('.modal-window__input---name');
    const passwordInput = document.querySelector('.modal-window__input--password');
    let checkUser=false;
    for(let i=0;i<users.length;i++){
        if(users[i].name==loginInput.value && users[i].password==passwordInput.value){
        checkUser=true;
        localStorage.setItem('userName', users[i].name);
        checkRole(users[i].role);
        authorization();
        document.location.href = "../index.html";
        break;
        }
        if(admin.name==loginInput.value && admin.password==passwordInput.value){
            checkUser=true;
            localStorage.setItem('userName', admin.name);
            checkRole(admin.role);
            authorization();
            document.location.href = "../index.html";
        }
    }
    if(!checkUser){
        alert("Вы ввели неверный логин или пароль");
    }
}

function checkRole(role){
    if(role=="admin"){
     localStorage.setItem('activeRole', 'admin');
    }
    if(role=="user"){
        localStorage.setItem('activeRole', 'user');
    }
    if(role=="driver"){
        localStorage.setItem('activeRole', 'driver');
    }
}

function registrate(){
    const loginInput = document.querySelector('#userName');
    const passwordInput = document.querySelector('#userPass');
    //loading
    let users = JSON.parse(localStorage.getItem('userData') || "[]");
    let user = {
            name:loginInput.value,
            password:passwordInput.value,
            role:'user'
        };
    users.push(user);
    localStorage.setItem('userData', JSON.stringify(users));
    changeForm();
}
function driverRegistrate(){
    const loginInput = document.querySelector('#driver-name');
    const passwordInput = document.querySelector('#driver-number');
    const carInput = document.querySelector('#driver-car');
    //loading
    let users = JSON.parse(localStorage.getItem('driverData') || "[]");
    let user = {
            name:loginInput.value,
            password:passwordInput.value,
            car:carInput.value,
            role:'driver'
        };
    users.push(user);
    localStorage.setItem('driverData', JSON.stringify(users));
}

/* change header*/
 function authorization(){
  var authorized = localStorage.getItem('userName') || '';
  const userHeaderActive = document.querySelector('.header__authorization-active');
  const userHeaderDisable = document.querySelector('.header__authorization-disable');
   if(authorized==''){
    userHeaderDisable.style.display ='none';
    userHeaderActive.style.display = 'block';
   }else{
   userHeaderDisable.style.display ='block';
   userHeaderActive.style.display = 'none';
   document.getElementById("p1").innerHTML = localStorage.getItem('userName');
   document.getElementById("user-name").innerHTML = localStorage.getItem('userName');
   }
}
function logOut(){
    localStorage.setItem('userName', '');
    localStorage.setItem('activeRole', '');
    authorization();
    changePage();
}
window.onload= ()=>{
    authorization();
    changePage();
}
/*change pages*/    
function changePage(){
    let role = localStorage.getItem('activeRole');
    const mainSection = document.querySelector(".main__order");
    const mainAdmin = document.querySelector(".main__admin");
    console.log(role);
    if(role=='admin'){
        console.log('work');
    //   mainSection.style.display="none";  
      mainAdmin.style.display="block";  
    }else if(role=='user'){
        mainSection.style.display="block";  
        mainAdmin.style.display="none";  
    }else if(role=='driver'){
        mainSection.style.display="block";  
        mainAdmin.style.display="none"; 
    }
}
/* */
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