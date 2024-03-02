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
