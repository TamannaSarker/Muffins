window.onload = function () {

    const addItembtn = document.querySelector("#addBtn");
    addItembtn.addEventListener("click", loadImg);
    let items = [];


    function loadImg(e) {
        e.preventDefault();




        if (typeof (localStorage) !== 'undefined') {
            let item = {
            };
            let nameInput = document.querySelector("#itemName").value;
            let priceInput = document.querySelector("#itemPrice").value;
            let fullPath = document.querySelector("#newImgSrc").value;
            let position = fullPath.indexOf("fakepath") + 9;
            let partPath = fullPath.slice(position);
            console.log(partPath);
            let uniqueId = getRandomInt(1, 1000);

            item.id = uniqueId;
            item.name = nameInput;
            item.price = priceInput;
            item.quantity = 1;
            item.source = `images/${partPath}`;
            console.log(item);
            items.push(item);
            let cardContainer = document.querySelector(".card-containers");
            let newCardDiv = document.createElement("div");
            newCardDiv.classList.add("card");

            if (JSON.parse(localStorage.getItem("ourProducts")) == null) {
                localStorage.setItem("ourProducts", JSON.stringify(items));
                // window.location.reload();
            }
            else {
                const localItem = JSON.parse(localStorage.getItem("ourProducts"));
                console.log("i am the data passed to localstorage 2nd time", localItem);
                items.push(localItem);

            }


            localStorage.setItem("ourProducts", JSON.stringify(items));
            console.log(items);
            //window.location.reload();


            const dataFromLocalStorage = JSON.parse(localStorage.getItem("ourProducts"));
            console.log("I am called before creating elements", dataFromLocalStorage);

            dataFromLocalStorage.map(data => {
                console.log("i am data from storage", data);
                newCardDiv.innerHTML = `
                                        <div class="card-body">
                                            <div class="card-title">
                                                <div class="product-name-style">${data.name}</div>
                                            </div>
                                            <div class="card-desc">
                                                <div class="product-price-style">$ <span>${data.price}</span> </div>
                                                <button class="remove-button">Remove</button>
                                                <button  onClick="function class="link-button">Add To Cart</button>
                                            </div>
                        
                                        </div>
                                    </div>`;

            });

            cardContainer.append(newCardDiv);

        }
        else {
            alert("localstorage is not set");

        }

    }




    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }



}







