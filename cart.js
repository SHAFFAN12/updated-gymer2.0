

let productData = JSON.parse(localStorage.getItem('info'))


function choice(a){


    if(a == 1){
        let mainDiv = document.querySelector('.cart')

        let productDiv = document.createElement('div')
        let productDes = document.createElement('p')
        
        let prodPrice = document.createTextNode("Basic")
        let prodText = document.createTextNode(" Swimming pool not included \n Canteen Optional \n Personal Trainer not included<br> Towels not included")
        
       
        
        productDes.appendChild(prodPrice)

        productDes.appendChild(prodText)
        productDes.classList.add("description");
        
         let productButton = document.createElement('button')
         productButton.innerText = 'Remove'
         productButton.classList.add("hbutton");
             productButton.classList.add("buy");
       

        productDiv.appendChild(productDes)
        productDiv.appendChild(productButton)
        productDiv.classList.add("productdiv");
        mainDiv.appendChild(productDiv)
    }
else if(a == 2){
    let mainDiv = document.querySelector('.cart')

    let productDiv = document.createElement('div')
    let productDes = document.createElement('p')
    
    let prodPrice = document.createTextNode("PRO")
    let prodText = document.createTextNode(" Swimming pool not included \n Canteen Optional \n Personal Trainer not included<br> Towels not included")
    
   
    
    productDes.appendChild(prodPrice)

    productDes.appendChild(prodText)
    productDes.classList.add("description");
    
     let productButton = document.createElement('button')
     productButton.innerText = 'Remove'
     productButton.classList.add("hbutton");
         productButton.classList.add("buy");
   

    productDiv.appendChild(productDes)
    productDiv.appendChild(productButton)
    productDiv.classList.add("productdiv");
    mainDiv.appendChild(productDiv)
}

else if(a == 3 ){
    let mainDiv = document.querySelector('.cart')

    let productDiv = document.createElement('div')
    let productDes = document.createElement('p')
    
    let prodPrice = document.createTextNode("PREMIUM")
    let prodText = document.createTextNode(" Swimming pool not included \n Canteen Optional \n Personal Trainer not included<br> Towels not included")
    
   
    
    productDes.appendChild(prodPrice)

    productDes.appendChild(prodText)
    productDes.classList.add("description");
    
     let productButton = document.createElement('button')
     productButton.innerText = 'Remove'
     productButton.classList.add("hbutton");
         productButton.classList.add("buy");
   

    productDiv.appendChild(productDes)
    productDiv.appendChild(productButton)
    productDiv.classList.add("productdiv");
    mainDiv.appendChild(productDiv)
}

    else{
        let mainDiv = document.querySelector('.cart')

        let productDiv = document.createElement('div')
        let productDes = document.createElement('p')
        
        let prodText = document.createTextNode(" NO SELECTION OCCURED")
        
       
        

        productDes.appendChild(prodText)
        productDes.classList.add("description");
        
         let productButton = document.createElement('button')
         productButton.innerText = 'Remove'
         productButton.classList.add("hbutton");
             productButton.classList.add("buy");
       

        productDiv.appendChild(productDes)
        productDiv.appendChild(productButton)
        productDiv.classList.add("productdiv");
        mainDiv.appendChild(productDiv)
    }
}    
//createProduct(Data2)
// function cartHandler(i){
//     createProduct(productData[i])
