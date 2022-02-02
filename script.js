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
                                <button class = 'fas fa-heart' id = 'btn1'></button> 
                                <img src = '${prod.imageUrl}'><br>
                                <h3>${prod.productName}</h3><br>
                                <p>R$ ${prod.price}</p><br>
                                <button id = btn2>ADICIONAR</button>
                                </div>
                                `                                          
        })
        tratarBotao()
    })

    async function tratarBotao() {
        let a = await document.querySelectorAll('#btn1')
        console.log(a)
        a.forEach(botao => {
        botao.addEventListener('click', acionar1)
            function acionar1() {
            console.log()
            botao.style.backgroundColor = 'rgb(241, 86, 86)'
            botao.style.color = 'white'
            }
        })
        let b = await document.querySelectorAll('#btn2')
        console.log(b)
        b.forEach(botao => {
        botao.addEventListener('click', acionar2)
            function acionar2() {
            console.log()
            botao.style.backgroundColor = 'rgb(142, 231, 142)'
            botao.style.color = 'black'
            botao.textContent = '✓ ADICIONADO'
            }
        })
        acionar1()
        acionar2()
    }