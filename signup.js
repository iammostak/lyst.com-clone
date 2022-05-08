document.querySelector("#forms").addEventListener("submit",errorthrough);
var newdata=JSON.parse(localStorage.getItem("userdata1"))||[];
function errorthrough(){
    event.preventDefault();
   var emailcatch=document.querySelector("#id_email").value;
   var passwordcatch=document.querySelector("#id_password").value;
   var cpass=document.querySelector(".same_for_whole_input").value;

   // if(cpass==passwordcatch){
   //    console.log("pass match")
   // }
   // else{
   //    box= document.createElement("div")
   //    box.innerText = "Your Confirm Password is Not Matched";
   //    box.setAttribute("class", "error1");
   //    document.querySelector(".error").append(box);
   // }



   var userdata={
       emailcatch:document.querySelector("#id_email").value,
       passwordcatch:document.querySelector("#id_password").value,
   }
  
   if(emailcatch==""){
      box= document.createElement("div")
box.innerText = "Please enter a valid email address.";
box.setAttribute("class", "error1");
document.querySelector(".error").append(box);
   }
   else if(passwordcatch==""){
      box= document.createElement("div")
      box.innerText = "This field is required.";
      box.setAttribute("class", "error1");
      document.querySelector(".pass").append(box);

   }
   
   else if(passwordcatch<=1000){
      box= document.createElement("div")
      box.innerText = "Password is to Short.";
      box.setAttribute("class", "error1");
      document.querySelector(".pass").append(box);

   }
   
  
   
   else{

      newdata.push(userdata)
      localStorage.setItem("userdata1",JSON.stringify(newdata));
   //  alert("You are Successfully SignedUp");
    
    window.location.href="sucessfull.html";
   }

   }
