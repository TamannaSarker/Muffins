window.onload = function () {

    const addItembtn = document.querySelector("#addBtn");
    addItembtn.addEventListener("click", loadImg);


    //adding new prodcuts to product.html from addProduct.html
    function loadImg(e) {
        e.preventDefault();

        if (JSON.parse(localStorage.getItem("ProductsCount")) == null) {
            let incrementCount = 4;

            localStorage.setItem("ProductsCount", incrementCount);

        }

        let id = JSON.parse(localStorage.getItem("ProductsCount"));
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("ourProducts"));
        (function addNewProductToLocalStorage() {


            //pushing the new product object to the existing data in local storage
            let item = {
            };
            let itemName = document.querySelector("#itemName").value;
            let price = document.querySelector("#itemPrice").value;
            let fullPath = document.querySelector("#newImgSrc").value;
            console.log(fullPath);
            let position = fullPath.indexOf("fakepath") + 9;
            let partPath = fullPath.slice(position);
            let imgSrc = `images/${partPath}`;
            item.id = id;
            item.itemName = itemName;
            item.price = price;
            item.imgSrc = imgSrc;
            dataFromLocalStorage.push(item);

        })();
        id++; // updating the id to next increment value
        //updating the new value to localstorage
        localStorage.setItem("ourProducts", JSON.stringify(dataFromLocalStorage));
        //updating the new increment of id to localstorage
        localStorage.setItem("ProductsCount", id);

        alert("item added");
        window.location.reload();

    }
}

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
               <span>${currentProducts[i].id}</span>
           </div>
           <div class="card-desc">
               <div class="product-price-style">$ <span> ${currentProducts[i].price}</span> </div>
               <button class="link-button">Add To Cart</button>
               <button id= ${currentProducts[i].id} class="remove-item-button" onclick= "deleteItem(this)">Remove</button>
           </div>`;

       cardContainersDiv.append(newDiv);
    }
 }

    function deleteItem(product) {

        const item = JSON.parse( localStorage.getItem("ourProducts"))
        console.log(item);
        console.log(product.id);
        for(let i = 0; i < item.length; i++){
            if( product.id == item[i].id) {
                item.splice(i, 1);
            
                localStorage.setItem("ourProducts", JSON.stringify(item));
        }
        location.reload(); 
        
    }
}

