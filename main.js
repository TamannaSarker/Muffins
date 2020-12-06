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


