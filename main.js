function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if (username == "admin" && password == "123") {
      alert("Login succesful as admin");
      window.open('addProduct.html');
   }
   else if (username == "user" && password == "1212") {
      alert("Login succesful as user");
      window.open('products.html');
   }


   else {
      alert("Login failed");
      return false;
   }
}

//------------ LOGIN SECTION END -------------------------

//-------------Product card add to product.html------------
//plus


window.onload = function cardAddFunction() {
   //Setting up localstorage with products array
   let products = [{
      id: 1,
      itemName: "Christmas cupcakes",
      price: 2,
      imgSrc: "images/jul-muffin.jpg"
   },
   {

      id: 2,
      itemName: "Blueberry cupcakes",
      price: 3,
      imgSrc: "images/blåbärsmuffin.jpg"

   },
   {
      id: 3,
      itemName: "Cinnemon cupcakes",
      price: 3,
      imgSrc: "images/kardemummamuffin.jpg"


   }

   ];

   //setting up localstorage
   if (JSON.parse(localStorage.getItem("ourProducts")) == null) {
      localStorage.setItem("ourProducts", JSON.stringify(products));
      //window.location.reload();
   }
   else {
      //if localstorage has data creating those products dynamically in product.html
      let currentProducts = JSON.parse(localStorage.getItem("ourProducts"));

      console.log(currentProducts);

      for (let i = 0; i < currentProducts.length; i++) {
         let cardContainersDiv = document.querySelector(".card-containers");
         let newDiv = document.createElement("div");
         newDiv.classList.add("card");
         newDiv.innerHTML += `
         <img class="img-style" src="${currentProducts[i].imgSrc}" alt="Julmuffin">

         <div class="card-body">
             <div class="card-title">
                 <div class="product-name-style">${currentProducts[i].itemName}</div>
             </div>
             <div class="card-desc">
                 <div class="product-price-style">$ <span> ${currentProducts[i].price}</span> </div>
                 <button class="link-button">Add To Cart</button>
             </div>`;

         cardContainersDiv.append(newDiv);

      }
   };


   //cart adding function
   /*cart display function*/

   (function cartFunction() {

      const cartInfo = document.querySelector("#cart-info");
      const cart = document.querySelector("#cart");
      const closeBtn = document.querySelector(".fa-times-circle");
      cartInfo.addEventListener("click", function () {
         cart.classList.add("show-cart");
      });

      closeBtn.addEventListener("click", function () {
         cart.classList.remove("show-cart");
      });

      //adding data to local storage
      const addToCartBtn = document.getElementsByClassName("link-button");
      let items = [];
      for (let i = 0; i < addToCartBtn.length; i++) {
         addToCartBtn[i].addEventListener("click", function (e) {

            if (typeof (localStorage) !== 'undefined') {
               let item = {
                  id: i + 1,
                  name: e.target.parentElement.parentElement.children[0].children[0].textContent,
                  price: e.target.parentElement.children[0].children[0].textContent,
                  quantity: 1
               };
               let fullPath = e.target.parentElement.parentElement.previousElementSibling.src;
               let pos = fullPath.indexOf("images") + 6;
               let partPath = fullPath.slice(pos);
               item.img = `img-cart${partPath}`;
               items.push(item);
               console.log(items);
               if (JSON.parse(localStorage.getItem("productInCart")) === null) {
                  localStorage.setItem("productInCart", JSON.stringify(items));
                  window.location.reload();

               } else {
                  const localItem = JSON.parse(localStorage.getItem("productInCart"));
                  localItem.map(data => {
                     if (item.id == data.id) {
                        item.quantity = data.quantity + 1;
                     } else {
                        items.push(data);
                     }
                  });

                  localStorage.setItem("productInCart", JSON.stringify(items));
                  console.log(items);
                  window.location.reload();
                  console.log(items);
               }


            } else {
               alert("localstorage is not set");

            }

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
         cartItem.innerHTML += "No items in cart";

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
                 <label for="number">quantity</label>
                 <input type="number id="number" value="1" step="1">

             </div>

             <a href="#" onclick=Delete(this)><i class="fas fa-trash"></i></a>

          `;

         });



         const cartDiv = document.querySelector(".cart");
         const totalDiv = document.querySelector(".cart-total-container");
         cartDiv.insertBefore(cartItem, totalDiv);


      };


      showTotal();


   })();
   //total function for items added to cart
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
      //clear cart function, which clears the localstorage
      (function clearCartFunc() {

         let clearCartBtn = document.querySelector("#clear-cart");

         clearCartBtn.addEventListener("click", () => {

            localStorage.removeItem("productInCart");
            window.location.reload();

         });


      })();

      //checkout function
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

}



