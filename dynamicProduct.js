window.onload = function () {

    const addItembtn = document.querySelector("#addBtn");
    addItembtn.addEventListener("click", loadImg);



    function loadImg(e) {
        e.preventDefault();

        if (JSON.parse(localStorage.getItem("ProductsCount")) == null) {
            let incrementCount = 4;

            localStorage.setItem("ProductsCount", incrementCount);

        }

        let id = JSON.parse(localStorage.getItem("ProductsCount"));
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("ourProducts"));
        (function addNewProductToLocalStorage() {



            let item = {
            };
            let itemName = document.querySelector("#itemName").value;
            let price = document.querySelector("#itemPrice").value;
            let fullPath = document.querySelector("#newImgSrc").value;
            let position = fullPath.indexOf("fakepath") + 9;
            let partPath = fullPath.slice(position);
            let imgSrc = `images/${partPath}`;
            item.id = id;
            item.itemName = itemName;
            item.price = price;
            item.imgSrc = imgSrc;
            dataFromLocalStorage.push(item);

        })();
        id++;
        localStorage.setItem("ourProducts", JSON.stringify(dataFromLocalStorage));
        localStorage.setItem("ProductsCount", id);





    }

}





