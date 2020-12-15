
/*
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

*/
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

/*

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
*/


