
// hämtar värden från localStorage med key = "productInCart" samt gör om till en array
var productInCart = JSON.parse(localStorage.getItem("productInCart"))

// loopar igenom prodcutInCart arrayen

for(var i = 0; i < productInCart.length; i++) {
    var newElement = document.createElement("div")
    // skapar en ny div som vi ger namnet newElement
    

    // skapar en struktur för html
    newElement.innerHTML = `
    <div class="checkout-title"> Title: ${productInCart[i].name}</div>
    <div class="checkout-price"> Price:  &#36;${productInCart[i].price}</div>
    <div class="checkout-quantity"> Quantity: ${productInCart[i].quantity && productInCart[i].quantity > 1 ? productInCart[i].quantity + " pieces" : productInCart[i].quantity + " piece"}</div>
    <div class="checkout-total">Total Price:  &#36;${productInCart[i].price * productInCart[i].quantity}</div>
    `

    let checkoutDiv = document.querySelector(".checkout")
    checkoutDiv.append(newElement)

    
}

var downloadPDFButton = document.getElementById("download-pdf")
downloadPDFButton.addEventListener("click", downloadPDF)

function downloadPDF() {
    let checkout = document.getElementById("checkout")
    // html2pdf är en function som vi hämtar från en annan javscript fil, se checkout.html: <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
    html2pdf().from(checkout).save()
}