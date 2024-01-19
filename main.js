

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
    search.style.display = 'block'
    nav.style.display = 'flex'
    card.style.display = 'block'
}

function promo(){
    promocao.style.display = 'block'
    sobre_.style.display = 'none'

    alerta.style.display = 'none'
    search.style.display = 'none'
    nav.style.display = 'none'
    card.style.display = 'none'
}
function sobre(){
    sobre_.style.display = 'block'
    promocao.style.display = 'none'

    alerta.style.display = 'none'
    search.style.display = 'none'
    nav.style.display = 'none'
    card.style.display = 'none'
}



function navBtn(element) {
    // Remove a classe 'active' de todos os botões
    var buttons = document.getElementsByClassName("btn-color");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Adiciona a classe 'active' ao botão clicado
    element.classList.add("active");


    // Scroll no nav
    const botaoAtivo = document.querySelector('.active')

    if(botaoAtivo){
        const nav = document.getElementById('navbar')
        const scrollLeft = botaoAtivo.offsetLeft - (nav.clientWidth - botaoAtivo.clientWidth) / 1.5;
        nav.scrollLeft = scrollLeft
    }
    

}

