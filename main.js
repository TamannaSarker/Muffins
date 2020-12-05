var chocolateButton = document.querySelector("#chocolate-button")

// skapar en array som ska hålla information för produkter i varukorgen
var cart = []
var product = {
    imageSrc:document.querySelector ("#test-img").src,
    title:document.querySelector ("#test-title").innerText
}
// console.log(product)
console.log(product.imageSrc)
console.log(product.title)

// skapar en funktion som körs i när användaren klickar på buy now
// en funktion är ett block kod som körs när man kallar på den
function buyNow () {

    cart.push(product)
    console.log(cart)
}

console.log(cart)
// skapa en eventlyssnare
// tar in två saker
// 1 - vilket event
// 2 - vilken funktion som ska köras
chocolateButton.addEventListener("click", buyNow)


/// Till Jonatan, kan du hjälpa med med de nya ändringar vi har lagt in den nya koden. 



