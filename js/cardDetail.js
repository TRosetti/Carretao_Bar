const body = document.querySelector('body')
const popup = document.querySelector('.popup')


function popUp(){
    popup.style.display = 'block'
    body.classList.add('popup_ativo')
    console.log('foi')
    body.style.overflow = 'hidden';
}


function closePopup() {
    popup.style.display = 'none'
    body.classList.remove('popup_ativo')
    body.style.overflow = 'auto';
}

function cardDetails(card){


    console.log(card)
    // Obtém as divs dentro do card
    var cardTitle = card.querySelector('.card_title').innerHTML;
    var cardText = card.querySelector('.card_text').innerHTML;
    var normalPrice = card.querySelector('.normal_price').innerHTML;
    var discountPrice = card.querySelector('.price_discount').innerHTML;
    var imgSrc = card.querySelector('.img img').getAttribute('src') ;




    // Exibe os valores no console (você pode fazer o que quiser com esses valores)
    console.log("Título: " + cardTitle);
    console.log("Descrição: " + cardText);
    console.log("Preço Normal: " + normalPrice);
    console.log("Preço com Desconto: " + discountPrice);
    console.log("SRC da imagem: " + imgSrc);


   
    popUp()
    createDetailCard(cardTitle, cardText, normalPrice, discountPrice, imgSrc)
}

    let imgPopupSrcElement = document.querySelector('.cardDetail img');
    const titleDetail = document.querySelector('.popUp_text h1')
    const textDetail = document.querySelector('.popUp_text p')
    const normalPricePopup = document.querySelector('.normal-popup')
    const descountPricePopup = document.querySelector('.desconto-popup')
function createDetailCard(cardTitle, cardText, normalPrice, discountPrice, imgSrc){
    

    imgPopupSrcElement.setAttribute('src', imgSrc) 
    imgPopupSrcElement.setAttribute('alt', cardTitle)

    titleDetail.innerHTML = cardTitle
    textDetail.innerHTML = cardText

    normalPricePopup.innerHTML = normalPrice
    descountPricePopup.innerHTML = discountPrice
}



