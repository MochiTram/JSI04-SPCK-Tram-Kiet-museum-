
console.log("hello")
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
            <div class="product">
               <img src="${item.img}" alt="${item.description}">
               <p class="title" style="font-family: 'Gladriel', sans-serif; font-weight: bolder" >${item.name}</p>
               <p class="description" >${item.description}</p>
               <p class="cart">Read more <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}

