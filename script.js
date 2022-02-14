"use strict"

let url = "https://corebiz-test.herokuapp.com/api/v1/products"

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        let div = document.querySelector('#info')
        div.innerHTML = ""
        console.log(data)
        let products = data
        products.forEach(prod => {
            div.innerHTML +=  `<div class = card>
                                <button class = 'fas fa-heart' id = 'btn1'></button> 
                                <img src = '${prod.imageUrl}'><br>
                                <h3>${prod.productName}</h3><br>
                                <p>${convertCurrency(prod.price)}</p><br>
                                <button id = btn2>ADICIONAR</button>
                                </div>
                                `                                          
        })
        let wishlistButton = document.querySelectorAll('#btn1')
        let buyButton = document.querySelectorAll('#btn2')
        handleWishlist(wishlistButton)
        handleAddToCart(buyButton)
    })

    function convertCurrency(valueToConvert) {
        console.log(valueToConvert)
        return (valueToConvert / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    function handleWishlist(wishlistBtn) {
        wishlistBtn.forEach(button => {
            button.addEventListener('click', function() {
                if (button.classList.contains("selected")) {
                    button.classList.remove("selected")
                } else {
                    button.classList.add("selected")
                }
            })
        })
    }

    function handleAddToCart(buyBtn) {
        buyBtn.forEach(button => {
            button.addEventListener('click', function() {
                if (button.classList.contains("selected")) {
                    button.classList.remove("selected")
                    button.textContent = 'ADICIONAR'
                } else {
                    button.classList.add("selected")
                    button.textContent = '✓ ADICIONADO'
                }
            })
        })
    }