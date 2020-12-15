
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

//------------ LOGIN SECTION -------------------------


function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if (username == "admin" && password == "123") {
      alert("Login succesful");

      window.location = "file:///Users/lea/Documents/GitHub/Muffins/admin.html";
      return false;
   }
   else {
      alert("Login failed");
   }

   (function () {
      const loginInformation = document.getElementById("loginInfo");
      const loginNow = document.getElementById("login");

      loginInformation.addEventListener("click", function () {
         loginNow.classList.toggle("showLogin");
      })

   })
}


//------------ LOGIN SECTION END -------------------------


//------------ ADMIN SECTION-------------------------

let products = [
   {
       name: "Mint Cupcake",
       price: 15,
   },
   {
       name: "Strawberry Cupcake",
       price: 10,
   },
   {
       name: "Chocolate Cupcake",
       price: 5,
   }
]

function addNewValue(e) {

   e.preventDefault();

   let newName = document.querySelector("#enterProductName").value;
   let newPrice = document.querySelector("#enterPrice").value;

   let newInput = {
      name: newName,
      price: newPrice,
   }

   let adminContainer = document.querySelector(".adminContainer");
   if (adminContainer) {

      const divNewName = document.querySelector(".product-name-style");
      divNewName.innerHTML = newName;
      
      const divNewPrice = document.querySelector(".product-price-style");
      divNewPrice.innerHTML = newPrice;

      products.push(newInput);

      console.log("This are my items: ", products);

   }
}

document.addEventListener("DOMContentLoaded", () => {
   document.querySelector("#submit").addEventListener("click", addNewValue);
})

//------------ ADMIN SECTION END -------------------------



document.querySelector("#minus-btn").setAttribute("disabled", "disabled");

      });
   };

   let currentDataIn = JSON.parse(localStorage.getItem("productInCart"));
   console.log(currentDataIn);

   const headerQuantityIcon = document.querySelector(".item-total");
   let quantity = 0;

   currentDataIn.map(data => {
      quantity = quantity + data.quantity;

   });
   headerQuantityIcon.textContent = quantity;

   const cartItem = document.createElement("div");
   cartItem.classList.add("cart-item");
   if (JSON.parse(localStorage.getItem("productInCart")) == null) {
      cartItem.innerHTML = `<p>"No items in cart"</p>`;

   } else {
      var dataInLocalStorage = JSON.parse(localStorage.getItem("productInCart"));

      dataInLocalStorage.map(data => {
         cartItem.innerHTML += `
         <span id="dataId" style="display:none;"> id:${data.id}</span>
         <img src="${data.img}" class="img-fluid rounded-circle" id="item-img" alt="">
             <div class="item-text">
                 <p id="cart-item-title" class="font-weight-bold mb-0">${data.name}</p>
                 <span id="cart-item-price" class="cart-item-price" class="mb-0">
                 <span>$</span>
                 ${data.price}</span>
                 <p id="cart-item-title" class="font-weight-bold mb-0">quantity:${data.quantity}</p>
                 <div>
                 <label for="quantity">Quantity:</label>
                 <input type="number" id="quantity" name="quantity" min="1" max="5">
                 </div>
                
             </div>
            
             <a href="#" onclick=Delete(this)><i class="fas fa-trash"></i></a>
            
          `;

      });



      const cartDiv = document.querySelector(".cart");
      const totalDiv = document.querySelector(".cart-total-container");
      cartDiv.insertBefore(cartItem, totalDiv);


   };


   showTotal();


};

function showTotal() {

   const total = [];
   const showTotal = JSON.parse(localStorage.getItem("productInCart"));
   showTotal.map(data => {

      total.push(parseFloat(((data.price) * data.quantity)));
      console.log(total);
      const totalMoney = total.reduce(function (total, item) {
         total += item;
         return total;

      }, 0);
      console.log(totalMoney);

      const FinalTotal = totalMoney.toFixed(2);
      const cartTotal = document.querySelector("#cart-total");
      cartTotal.textContent = FinalTotal;

      const navCartTotal = document.querySelector(".cart-total");
      navCartTotal.textContent = "$" + FinalTotal;


   });

   (function clearCartFunc() {

      let clearCartBtn = document.querySelector("#clear-cart");

      clearCartBtn.addEventListener("click", () => {

         localStorage.removeItem("productInCart");
         window.location.reload();

      });


   })();


   (function checkout() {
      let checkOutBtn = document.querySelector("#checkout");
      checkOutBtn.addEventListener("click", () => {
         var dataInLocalStorage = JSON.parse(localStorage.getItem("productInCart"));
         const cartTotal = document.querySelector("#cart-total");
         console.log(cartTotal);

         if (cartTotal.textContent == 0 || dataInLocalStorage == null) {
            alert("please add items to cart");
         }
         else { alert("Your Order has been placed successfully"); }


      })


   })();


};
