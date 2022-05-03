
document.querySelector("#form").addEventListener("submit", signup)


var  userData = JSON.parse(localStorage.getItem("regUser")) || []



function signup (){
var a=document.querySelector("#pass1").value
var b=document.querySelector("#pass2").value

  if(a==b){
     event.preventDefault();
     var userObj = {
   name : document.querySelector("#name").value,
   email : document.querySelector("#mail").value,
   pass : document.querySelector("#pass2").value,
     }
    
     console.log(userObj)
     userData.push(userObj)
     localStorage.setItem("regUser",JSON.stringify(userData))
     alert("Sign up succesfully")
     window.location.href="login.html"
    //  return true;
    }
    else{
    //   return false;
    alert("password should match")
    window.location.href="#"
    }
    
    
 }

