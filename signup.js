
var form =document.querySelector("#form")

// let LSData=JSON.parse(localStorage.getItem("userData"));
var  userData = JSON.parse(localStorage.getItem("regUser")) || []

form.addEventListener("submit",function(event) {
  event.preventDefault();
  const data={
   username:form.name.value,
   email: form.mail.value,
   password:form.pass2.value,
  }
  if(userData != null && userData.email === data.email){
      alert("Account already exist. Please Login");
      return window.location.href="login.html";
  }
else{
  localStorage.setItem("regUser",JSON.stringify(data));
  alert("Signup successful. Please Signin")
}
})



