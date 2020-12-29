// { "id":0, "image":"https://exampleImage.com/","title":"Lacoste", "description": "this is a very fancy shoe", "price": 1999 }
// get product to edit from localStorage "edit-product" which only contains one object, the one we target when pressing edit button
let productToEdit = JSON.parse(localStorage.getItem('edit-product'))


document.getElementById('itemName').value = productToEdit.itemName
// set description
//document.getElementById('description').value = productToEdit.description
// set price
document.getElementById('itemPrice').value = productToEdit.itemPrice

// function that handles submit
const submitHandler = (event) => {
	// prevents sumbit button to reload the page (not submit the form)
    event.preventDefault()
    
    // get products from localStorage "products" and parse to an array
	let ourProducts = JSON.parse(localStorage.getItem('ourProducts'))

	// create a new object based on values of the inputs in the HTML form
	// using spreadoperator "...productEdit" to get id image title description and price from productToEdit
	// and pass its structure into the new object we are creating.
	// anything after the spread operator will add to the object unless keys already exists
	// then it overwrites... (title, description, price)

    let editedProduct = {
		...productToEdit,
		itemName: document.getElementById('itemName').value,
		itemPrice: document.getElementById('itemPrice').value
    }
    
    // since index in products is same as id of the chosen product we can say
	// take the index in the products array that is same as id of the product we want to edit
	// and set its value to the new object we created

	// example products[2]
    ourProducts[productToEdit.id] = editedProduct
    
    // then save the mainpulated version of the products array back in local storage
	localStorage.setItem('ourProducts', JSON.stringify(ourProducts))
	// clears the edit-product from localStorage
	localStorage.removeItem('edit-product')
	// sends user back to index page
	window.location.href = 'addProduct.html'
}

