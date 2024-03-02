const cardContainer = document.querySelector('#cardContainer')
let itens = []
const loadCard = async () => {
    try{
        const res = await fetch('cardapio.json');
        itens = await res.json();
        // console.log(itens)
        displayCards(itens)
        cardContainer.innerHTML += menu()
        changeMenu()
        menuOrganizer()
        desaparecer()
    } catch (err) {
        console.log(err);
    }
};

searchBar.addEventListener('keyup', (key) => {
    const searchString = key.target.value.toLowerCase();    // .target.value -> vai pegando tudo que está escrito 

    const filteredMenu = itens.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchString) ||
            item.content.toLowerCase().includes(searchString)
        );
    });

    displayCards(filteredMenu);
    const dias = document.querySelector('.dias').textContent
    console.log(dias)
    changeMenu()

    if(key.target.value.length == 0){
        loadCard()
    }
});




const displayCards = (cards) =>{
   
    const htmlString = cards
        .map((card) => {

            return `
            <div class="card_  ${card.class1} ${card.id}" onclick="cardDetails(this)">
                <div class="card_content">
                    <h2 class="card_title">${card.title}</h2>
                    <p class="card_text">${card.content}</p>
                    <div class="price">
                        <p class='normal_price'>${card.price1}</p>
                        <p class="price_discount">${card.price2}</p>
                    </div>
                </div>
                <div class="img">
                    <img src="${card.img}" alt="" srcset="">
                </div>
            </div>
            `;
        
           
        })
        .join('');

        cardContainer.innerHTML = htmlString

}

loadCard()




function menu(){
        return `
        <div id="promocoes">
            <h2>Promoções</h2>
            <div class='card_'></div>
        </div>
        <div id="entradas">
            <h2>Entradas</h2>
        </div>
        <div id="guarnicoes">
            <h2>Guarnições</h2>
        </div>
        <div id="carnes">
            <h2>Carnes</h2>
        </div>
        <div id="bebidas">
            <h2>Bebidas</h2>
        </div>
        <div id="drinks">
            <h2>Drinks</h2>
        </div>
        `

}


function menuOrganizer(){

    const divEntradas = document.getElementById('entradas')
    const divCarnes = document.getElementById('carnes')
    const divGuarnicao = document.getElementById('guarnicoes')
    const divBebida = document.getElementById('bebidas')
    const divDrinks = document.getElementById('drinks')

    const entradas = document.querySelectorAll('.entradas')
    entradas.forEach((item) => {
        divEntradas.appendChild(item)
    })
    const carnes = document.querySelectorAll('.carnes')
    carnes.forEach((item) => {
        divCarnes.appendChild(item)
    })
    const guarnicoes = document.querySelectorAll('.guarnicoes')
    guarnicoes.forEach((item) => {
        divGuarnicao.appendChild(item)
    })
    const bebidas = document.querySelectorAll('.bebidas')
    bebidas.forEach((item) => {
        divBebida.appendChild(item)
    })
    const drinks = document.querySelectorAll('.drinks')
    drinks.forEach((item) => {
        divDrinks.appendChild(item)
    })
}



function desaparecer(){
    const kieber = document.querySelector('.e7')
    kieber.style.display = 'none'

    const caipirinhaJambu = document.querySelector('.d2')
    caipirinhaJambu.style.display = 'none'

    const doseJamu = document.querySelector('.d11')
    doseJamu.style.display = 'none'

}

