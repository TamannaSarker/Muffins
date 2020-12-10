/*Cart increment function*/
let buyBtn = document.querySelectorAll(".link-button");
console.log(buyBtn);

for (var i = 0; i < buyBtn.length; i++) {
   buyBtn[i].addEventListener("click", addCartCounter)
}

function updateCartOnReload() {
   let productCount = localStorage.getItem("cartNumber");
   document.querySelector(".cart span").textContent = productCount;

}


function addCartCounter() {
   let productCount = localStorage.getItem("cartNumber");
   productCount = parseInt(productCount);
   if (productCount) {
      localStorage.setItem('cartNumber', productCount + 1);
      document.querySelector(".cart span").textContent = productCount + 1;
   } else {
      localStorage.setItem('cartNumber', 1);
      document.querySelector(".cart span").textContent = 1;
   }

}

updateCartOnReload();



document.querySelector("#minus-btn").setAttribute("disabled", "disabled");

var valueCount
//plus

document.querySelector("#plus-btn").addEventListener("click", function () {
   valueCount = document.getElementById("quantity").value;

   valueCount++;


   document.getElementById("quantity").value = valueCount
   if (valueCount > 1) {
      document.querySelector("#minus-btn").removeAttribute("disabled")
      document.querySelector("#minus-btn").classList.remove("disabled")
   }

})
//minus
document.querySelector("#minus-btn").addEventListener("click", function () {
   valueCount = document.getElementById("quantity").value;

   valueCount--;


   document.getElementById("quantity").value = valueCount
   if (valueCount == 1) {
      document.querySelector("#minus-btn").setAttribute("disabled", "disabled")
   }



});

// Contact
function validate(){
   var name = document.getElementById("name").value;
   var subject = document.getElementById("subject").value;
   var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var message = document.getElementById("message").value;
   var error_message = document.getElementById("error_message");
   
   error_message.style.padding = "10px";
   
   var text;
   if(name.length < 5){
     text = "Please Enter valid Name (More Than 5 Characters)";
     error_message.innerHTML = text;
     return false;
   }
   if(subject.length < 10){
     text = "Please Enter Correct Subject (More Than 10 Characters)";
     error_message.innerHTML = text;
     return false;
   }
   if(isNaN(phone) || phone.length != 10){
     text = "Please Enter valid Phone Number";
     error_message.innerHTML = text;
     return false;
   }
   if(email.indexOf("@") == -1 || email.length < 6){
     text = "Please Enter valid Email";
     error_message.innerHTML = text;
     return false;
   }
   if(message.length <= 140){
     text = "Please Enter Text (More Than 140 Characters)";
     error_message.innerHTML = text;
     return false;
   }
   alert("Form Submitted Successfully!");
   return true;
 }


