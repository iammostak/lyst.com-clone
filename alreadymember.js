var getting_data=JSON.parse(localStorage.getItem("userdata1"));



 var form=document.querySelector("#forms");


var flag=false;
form.addEventListener("submit",function(event){
   event.preventDefault();
  var userdata={
    email_catch:form.id_email.value,
    password_catch:form.id_password.value
   };
   
   checkdata(userdata);
   
});
function checkdata(data){
   var flag=false;
   getting_data.forEach(function(ele){
      console.log(ele.emailcatch);
      if((ele.emailcatch==data.email_catch) && (ele.passwordcatch==data.password_catch)){
         flag=true;
      }
   })

   



if(flag==true){
   alert("login successfull");
   window.location.href="index.html";
}
else{
   box= document.createElement("div")
           box.innerText = "you entered a wrong email address.";
           box.setAttribute("class", "error1");
           document.querySelector(".error").append(box);
          
   
       
}
}
