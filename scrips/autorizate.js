function logIn(){
    let users = JSON.parse(localStorage.getItem('userData') || "[]");
    const loginInput = document.querySelector('.modal-window__input---name');
    const passwordInput = document.querySelector('.modal-window__input--password');
    let checkUser=false;
    for(let i=0;i<users.length;i++){
        if(users[i].name==loginInput.value && users[i].password==passwordInput.value){
        console.log("work");
        checkUser=true;
        localStorage.setItem('userName', users[i].name);
        authorization();
        document.location.href = "../index.html";
        break;
        }
    }
    if(!checkUser){
        alert("Вы ввели неверный логин или пароль");
    }
}

function registrate(){
    const loginInput = document.querySelector('#userName');
    const passwordInput = document.querySelector('#userPass');
    //loading
    let users = JSON.parse(localStorage.getItem('userData') || "[]");
    let user = {
            name:loginInput.value,
            password:passwordInput.value
        };
    users.push(user);
    localStorage.setItem('userData', JSON.stringify(users));
    // localStorage.setItem('userName', user.name);
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
    authorization();
}
window.onload= ()=>{
    authorization();
}