"use strict"

let url = "https://corebiz-test.herokuapp.com/api/v1/products"

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let div = document.querySelector('#info')
            div.innerHTML = ""
            console.log(data)
            let produtos = data    

            produtos.forEach(prod => {
                div.innerHTML +=  `<div class = card>
                                    <button class = 'far fa-heart' id = 'btn1'></button> 
                                    <img src = '${prod.imageUrl}'><br>
                                    <h3>${prod.productName}</h3><br>
                                    <p>R$ ${prod.price}</p><br>
                                    <button id = btn2>ADICIONAR</button>
                                    </div>
                                  `                                          
            })
        })