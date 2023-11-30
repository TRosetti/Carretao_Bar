

const alerta = document.querySelector('.alert')
const h4_alerta = document.querySelector('.alert-heading')
const my_1 = document.querySelector('.my-1')

const search = document.querySelector('.search')
const nav = document.querySelector('#nav-2')
const card = document.querySelector('#cardContainer')

const promocao = document.querySelector('.promo')
const sobre_ = document.querySelector('.sobre')

const dias = document.querySelector('.dias')
const li = document.querySelectorAll('li')

const priceRegular = document.querySelectorAll('.price p')
const priceQuinta = document.querySelectorAll('.price_discount')

const card_content = document.querySelectorAll('.card_content')




function cardapio(){
    promocao.style.display = 'none'
    sobre_.style.display = 'none'

    alerta.style.display = 'block'
    // search.style.display = 'none'
    nav.style.display = 'flex'
    card.style.display = 'block'
}

function promo(){
    promocao.style.display = 'block'
    sobre_.style.display = 'none'

    alerta.style.display = 'none'
    // search.style.display = 'none'
    nav.style.display = 'none'
    card.style.display = 'none'
}
function sobre(){
    sobre_.style.display = 'block'
    promocao.style.display = 'none'

    alerta.style.display = 'none'
    // search.style.display = 'none'
    nav.style.display = 'none'
    card.style.display = 'none'
}



function changeColor(element) {
    // Remove a classe 'active' de todos os botões
    var buttons = document.getElementsByClassName("btn-color");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Adiciona a classe 'active' ao botão clicado
    element.classList.add("active");
    

    const tudo = document.querySelectorAll('.tudo')
    const entradas = document.querySelectorAll('.entradas')
    const guarnicoes = document.querySelectorAll('.guarnicoes')
    const carnes = document.querySelectorAll('.carnes')
    const bebidas = document.querySelectorAll('.bebidas')
    const drinks = document.querySelectorAll('.drinks')

    if(element.value == 'tudo'){

        tudo.forEach(function(tudo){
            tudo.style.display = 'flex'
        })
    }else if(element.value == 'entradas'){

        tudo.forEach(function(tudo){
            tudo.style.display = 'none'
        })
        entradas.forEach(function(entradas){
            
            entradas.style.display = 'flex'
        })

    }else if(element.value == 'guarnicoes'){
        tudo.forEach(function(tudo){
            tudo.style.display = 'none'
        })

        guarnicoes.forEach(function(guarnicoes){
            guarnicoes.style.display = 'flex'
        })

    }else if(element.value == 'carnes'){
        tudo.forEach(function(tudo){
            tudo.style.display = 'none'
        })
        carnes.forEach(function(carnes){
            carnes.style.display = 'flex'
        })

    }else if(element.value == 'bebidas'){
        tudo.forEach(function(tudo){
            tudo.style.display = 'none'
        })
        bebidas.forEach( (bebidas)=>{
            bebidas.style.display = 'flex'
        })

    }else if(element.value == 'drinks'){
        tudo.forEach(function(tudo){
            tudo.style.display = 'none'
        })
        drinks.forEach( (drinks)=>{
            drinks.style.display = 'flex'
        })

    }
}