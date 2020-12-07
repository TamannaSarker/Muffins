
      document.querySelector("#minus-btn").setAttribute("disabled", "disabled");

      var valueCount=0
      //plus
     const btnList =  document.querySelectorAll(".plus-btn")
      console.log("button" , btnList)

      for( var i = 0;i<btnList.length; i++ ){

         
            btnList[i].addEventListener("click", function (e) {
               e.preventDefault()
              var  val =document.querySelector(".input").value 
             
              
               var value =  Number(val)
               value += 1
               // val = val+1
               // valueCount +
               document.querySelector(".input").value = value
      
           })
           console.log("hello" , valueCount)

         }
     

         document.getElementById("quantity").value = valueCount
         if (valueCount > 1) {
            document.querySelector("#minus-btn").removeAttribute("disabled")
            document.querySelector("#minus-btn").classList.remove("disabled")
         }

   
      //minus


     const btnListMinus= document.querySelectorAll(".minus-btn")
      
      btnListMinus.map(  btn =>{
         btn.addEventListener("click", function () {
            valueCount = document.getElementById("quantity").value;
   
            valueCount--;
      })
      
     


         document.getElementById("quantity").value = valueCount
         if (valueCount == 1) {
            document.querySelector("#minus-btn").setAttribute("disabled", "disabled")
         }



      })