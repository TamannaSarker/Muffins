console.log("running");

let buyBtn = document.querySelectorAll(".link-button-1");


for (var i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", addCartCounter)
}
function updateCartOnReload() {
    let productCount = localStorage.getItem("cartNumber");
    document.querySelector(".cartLink span").textContent = productCount;

}


function addCartCounter() {
    let productCount = localStorage.getItem("cartNumber");
    productCount = parseInt(productCount);
    if (productCount) {
        localStorage.setItem('cartNumber', productCount + 1);
        document.querySelector(".cartLink span").textContent = productCount + 1;
    } else {
        localStorage.setItem('cartNumber', 1);
        document.querySelector(".cartLink span").textContent = 1;
    }

}

updateCartOnReload();