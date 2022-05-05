let form = document.querySelector("form");
// let LSData=JSON.parse(localStorage.getItem("userData"));
// let LSData=JSON.parse(localStorage.getItem("userData"));
var  userData = JSON.parse(localStorage.getItem("regUser"))

function signin(formData,userData) {
 if (userData == null){
     alert("User Doesn't Exist. Please signup")
 }else if(userData.email != formData.email || userData.password != formData.password){
     alert("Please Enter Valid Email ID or Password");
 }else{
     alert("Sign in Successful. Please Continue with your shopping");
     localStorage.setItem("signin", JSON.stringify(userData));
     window.location.href="./index.html";
 }
}
form.addEventListener("submit",function(event) {
    event.preventDefault();
  let data={
      email:form.email.value,
      password: form.password.value
  }
  signin(data,userData);
})