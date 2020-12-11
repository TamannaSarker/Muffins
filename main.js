
//------------ LOGIN SECTION -------------------------


function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if (username == "admin" && password == "123") {
      alert("Login succesful");
      return false;

   }
   else {
      alert("Login failed");
   }
   document.querySelector("#minus-btn").setAttribute("disabled", "disabled");

   var valueCount
   //plus
   document.querySelector("#plus-btn").addEventListener("click", function () {
      valueCount = document.getElementById("quantity").value;

      valueCount++;

var valueCount
//plus

document.querySelector("#plus-btn").addEventListener("click", function () {
   valueCount = document.getElementById("quantity").value;

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

//------------ LOGIN SECTION END -------------------------

//cart adding function
/*cart display function*/
(function () {
   /*select the cart link and the cart div and add a click event listner to show the cart by adding the css class using classList function, toggle helps in removing the css class when we again click on the cart link */
   const cartInfo = document.querySelector("#cart-info");
   const cart = document.querySelector("#cart");

   cartInfo.addEventListener("click", function () {
      cart.classList.toggle("show-cart");


   });

})();

//add items to the cart

(function () {
   const cartBtn = document.querySelectorAll(".link-button");
   cartBtn.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
         let fullPath = event.target.parentElement.parentElement.previousElementSibling.src;
         let pos = fullPath.indexOf("images") + 6;
         let partPath = fullPath.slice(pos);
         const item = {};
         item.img = `img-cart${partPath}`;
         let name = event.target.parentElement.previousElementSibling.children[0].textContent;
         item.name = name;
         let price = event.target.parentElement.children[0].textContent;
         let finalPrice = price.slice("1");
         item.price = finalPrice;
         console.log(item);
         //local storage function start

         localStorage.setItem("cartItem", JSON.stringify({ item }));

         localStorage.getItem("cartItem");

         //local storage function end


         const cartItem = document.createElement("div");
         cartItem.classList.add("cart-item");
         cartItem.innerHTML = `
         <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
             <div class="item-text">
                 <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                 <span>$</span>
                 <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                 
             </div>
             <a href="#" id='cart-item-remove' class="cart-item-remove">
                 <i class="fas fa-trash"></i>
             </a>

             </div>
             
             `;
         //select cart div
         const cart = document.querySelector(".cart");
         const total = document.querySelector(".cart-total-container");

         cart.insertBefore(cartItem, total);
         alert("item added to cart");
         showTotal();

      });

   });

   function showTotal() {
      const items = document.querySelectorAll(".cart-item-price");
      const total = [];
      items.forEach(function (item) {
         total.push(parseFloat(item.textContent));

      });
      console.log(total);
      const totalMoney = total.reduce(function (total, item) {
         total += item;
         return total;

      }, 0);
      const FinalTotal = totalMoney.toFixed(2);
      const cartTotal = document.querySelector("#cart-total");
      cartTotal.textContent = FinalTotal;

      const navCartTotal = document.querySelector(".cart-total");
      navCartTotal.textContent = "$" + FinalTotal;

      const carttotalItem = document.querySelector(".item-total");
      carttotalItem.textContent = total.length;
   };

})();

