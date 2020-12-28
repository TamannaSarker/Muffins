window.onload = function () {

    const chooseImgBtn = document.querySelector("#chooseImg");
    chooseImgBtn.addEventListener("click", apiImageFunc);




    //function to call images from API

    async function apiImageFunc(e) {
        e.preventDefault();

        let apiImgDiv = document.querySelector(".apiImageDiv");
        apiImgDiv.classList.add("show-apiImageDiv");

        const closeBtn = document.querySelector(".fa-times-circle");
        closeBtn.addEventListener("click", function () {
            apiImgDiv.classList.remove("show-apiImageDiv");
        });

        const url = "https://api.unsplash.com/search/photos?query=cupcakes&per_page=20&client_id=3JCiE4B5MmNqBKSapU83_51udslQFpkOw_ObgTDTXO8";
        const imageDiv = document.querySelector('.image');
        await fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {

                for (let i = 0; i < data.results.length; i++) {


                    let imageElement = document.createElement('img');
                    imageElement.setAttribute("class", "apiImg");
                    imageElement.src = data.results[i].urls.thumb;
                    apiImgDiv.append(imageElement);

                }
            });

        //To select the image chosen and view the source in a div
        let fullPath = document.getElementsByClassName("apiImg");

        console.log("api images", fullPath);

        let imgClicked;

        console.log("fullpath len", fullPath.length);

        for (let i = 0; i < fullPath.length; i++) {

            fullPath[i].addEventListener("click", () => {
                imgClicked = fullPath[i].currentSrc;

                console.log("im in loop", imgClicked);

                alert("image chosen");
                let newdivElement = document.createElement("div");
                newdivElement.setAttribute("class", "imgSource");
                newdivElement.textContent = imgClicked;
                let formelement = document.querySelector("form");
                formelement.append(newdivElement);

            });
        }



    }




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

            console.log("im here");


            //pushing the new product object to the existing data in local storage
            let item = {
            };
            let itemName = document.querySelector("#itemName").value;
            let price = document.querySelector("#itemPrice").value;
            let imgSourceElement = document.querySelector(".imgSource").textContent;


            item.id = id;
            item.itemName = itemName;
            item.price = price;



            item.imgSrc = imgSourceElement;

            console.log("i am the Object", item);
            dataFromLocalStorage.push(item);


        })();
        id++;

        // updating the id to next increment value
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
               
           </div>
           <div class="card-desc">
               <div class="product-price-style">$ <span> ${currentProducts[i].price}</span> </div>
               <button class="link-button">Edit</button>
               <button id= ${currentProducts[i].id} class="remove-item-button" onclick= "deleteItem(this)">Remove</button>
           </div>`;

        cardContainersDiv.append(newDiv);
    }
 }

    function deleteItem(product) {

        const item = JSON.parse(localStorage.getItem("ourProducts"))
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

