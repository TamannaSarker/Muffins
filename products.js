function Delete(e) {
    let items = [];
    console.log("i am here", items);
    var CurrentDataInLocalStorage = JSON.parse(localStorage.getItem("productInCart"));
    CurrentDataInLocalStorage.map(data => {


        //console.log("hey", e.parentElement.children[0]);

        let id = e.parentElement.children[0].textContent;

        //console.log(id);
        //console.log(data.id);

        if (data.id != id.split(':').pop()) {

            //console.log(data.id);

            items.push(data);

        }

    });

    localStorage.setItem("productInCart", JSON.stringify(items));
    window.location.reload();
}
