let Data = [ 
{ id: 0, name: "Basic", description: " Swimming pool not included<br>Canteen Optional<br>Personal Trainer not included<br> Towels not included", price:"$9.99", is_featured: true },
{ id: 1, name: "Pro", description: " Swimming pool not included<br>Canteen Optional<br>Personal Trainer not included<br> Towels not included", price:"$9.99", is_featured: true },
{ id: 3, name: "Premium", description: " Swimming pool not included<br>Canteen Optional<br>Personal Trainer not included<br> Towels not included", price:"$9.99", is_featured: true },
]
function call(service){
  alert('WELLCOME TO GYM')
  for( i=0;i<3;i++){
  info=service
      let prevOrder = JSON.parse(localStorage.getItem('info'))
      let currentOrder = []
      
          currentOrder = [service]
           localStorage.setItem('info', JSON.stringify(currentOrder))
  }
      }
  
call(Data)





x













   //   alert('Order added to Cart')

// const cartHandler = (product)=>{
//   let data=JSON.parse(localStorage.getItem('name'))
//   alert('Order added to Cart')


// }
// cartHandler(productData);
// const cartHandler = (product) => {
//     alert('Order added to cart')
//     let prevOrder = JSON.parse(localStorage.getItem('cart'))
//     let currentOrder = []
//     if (prevOrder) {
//         currentOrder = [product, ...prevOrder]
//     } else {
//         currentOrder = [product]
//     }


//     localStorage.setItem('cart', JSON.stringify(currentOrder))
// }

// function createProduct(products) {
//    let mainDiv = document.querySelector('#services')
// mainDiv.classList.add("container");

//    for (let product of products) {

//        let productDiv = document.createElement('div')
//        let productDes = document.createElement('p')
//        let prodText = document.createTextNode(product.description)
//        let prodPrice = document.createTextNode(product.price)
       
      
        

//        productDes.appendChild(prodText)
//        productDes.appendChild(prodPrice)
//        productDes.classList.add("description");
       
//        let productButton = document.createElement('button')
//        productButton.innerText = 'Buy Service'
//        productButton.addEventListener('click', () => cartHandler(product))
//        productButton.classList.add("hbutton");
//        productButton.classList.add("buy");
      
//        productButton.addEventListener('click',()=> cartno())

//        productDiv.appendChild(productDes)
//        productDiv.appendChild(productButton)

//        mainDiv.appendChild(productDiv)


//    }







// function validate() {
// // 	var username = document.getElementById("username").value;
// // 	var password = document.getElementById("password").value;

// // 	if (username == "" || password == "") {
// // 		alert("Please enter your username and password.");
// // 		return false;
// // 	}

// 	// Here, you can implement your authentication logic
// 	// If the user is authenticated successfully, redirect them to the dashboard page
// 	// Otherwise, display an error message and ask the user to try again
// // }










function addToCart() {
    const cart = document.getElementsByClassName("cart")[0].innerText
    const updatedCart = Number(cart) + 1
    document.getElementsByClassName("cart")[0].innerText = updatedCart
    alert("Article added to cart")
}
// /* <div class="columns">
//   <ul class="price">
//     <li class="header">Basic</li>
//     <li class="grey">$ 9.99 / month</li>
//     <li style="color: white;">Swimming pool not included</li>
//     <li style="color: white;">Canteen Optional</li>
//     <li style="color: white;">Personal Trainer not included</li>
//     <li style="color: white;">Towels not included </li>
//     <button onclick="addToCart()" class="button" style="margin-left: 50px;"> <a href="#">Choose Plan</a></button>
//   </ul>
// </div> */