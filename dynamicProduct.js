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



    }

}





