

function changeMenu() {
    let hoje = new Date();
    let diaDaSemana = hoje.getDay();

    
    const h4_alerta = document.querySelector('.alert-heading')
    const my_1 = document.querySelector('.my-1')

 

    const dias = document.querySelector('.dias')
    const li = document.querySelectorAll('li')

    const priceRegular = document.querySelectorAll('.normal_price')
    const priceQuinta = document.querySelectorAll('.price_discount')

    //  Mudanças para os dias da semana

    switch (diaDaSemana) {
        case 0:
            // Domingo
            dias.innerHTML = 'Domingo'
            dom()            
            break;
        case 1:
            // Segunda-Feira
            dias.innerHTML = 'Segunda-Feira'
            seg_ter_qua()
            break;
        case 2:
            // Terça-Feira
            dias.innerHTML = 'Terça-Feira'
            seg_ter_qua()
            break;
        case 3:
            // Quarta-Feira
            dias.innerHTML = 'Quarta-Feira'
            seg_ter_qua()
            break;
        case 4:
            // Quinta-Feira
            dias.innerHTML = 'Quinta-Feira'
            qui()
            break;
        case 5:
            // Sexta-Feira
            dias.innerHTML = 'Sexta-Feira'
            sex()
            break;
        case 6:
            // Sábado
            dias.innerHTML = 'Sábado'
            sab()
            break;
        default:
            // Lidar com casos não previstos
    }
    
  
    function seg_ter_qua(){
        h4_alerta.innerHTML = dias.textContent
        my_1.innerHTML = 'Estamos fechados hoje, confira os dias de funcionamento clicando em Sobre ao lado de Promoções.'
        const promocoes = document.querySelector('#promocoes > div.card_')
    
        priceRegular.forEach((price) =>{
            price.style.textDecoration = 'none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
        })
        if(promocoes != null){
            promocoes.innerHTML = '<h2 class="card_title">Hoje Não Temos Promoções</h2>'
        }
        normalPricePopup.classList.remove('disabled')
        descountPricePopup.style.display = 'none'
    }
    
    function qui(){
        h4_alerta.innerHTML = 'Dia do Micão'
        my_1.innerHTML = 'Hoje cobramos uma taxa de R$20,00 por pessoa e o cardapio fica a <span>Preço de Custo</span>.'
        const promocoes = document.querySelector('#promocoes > div.card_')
        priceRegular.forEach((price) =>{
            price.style.textDecoration = 'line-through';
            price.style.color = 'black'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'block';
            price.style.textDecoration ='none';
            price.style.color = 'green'
        })

        if(promocoes != null){
            promocoes.innerHTML = '<h2 class="card_title">Quinta do <span>Micão</span> </h2>'
        }

        normalPricePopup.classList.add('disabled')
        descountPricePopup.style.display = 'inline-block'
    }
    
    function sex(){
        h4_alerta.innerHTML = 'Promoção do Dia'
        my_1.innerHTML = 'Hoje o <span>Chopp R$4,90</span> a noite toda!!! <br/>  <br/>Para participar da promoção cada pessoa deve ter uma valor de 20 reais de consumo de petisco ou carne da casa.'
        const promocoes = document.querySelector('#promocoes > div.card_')
        const chopp_price = document.querySelector('.normal_price_b1')

        priceRegular.forEach((price) =>{
            price.style.textDecoration ='none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
           
        })
        if(promocoes != null){
            promocoes.innerHTML = '<h2 class="card_title">Chopp a <span>R$4,90</span></h2>'
        }
        normalPricePopup.classList.remove('disabled')
        descountPricePopup.style.display = 'none'
    }
    
    function sab(){
        h4_alerta.innerHTML = 'Promoção do Dia'
        my_1.innerHTML = 'Hoje temos <span>Drink em Dobro</span>, peça 1 e leve 2.'
        const promocoes = document.querySelector('#promocoes > div.card_')

        priceRegular.forEach((price) =>{
            price.style.textDecoration ='none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
            
        })
        if(promocoes != null){
            promocoes.innerHTML = '<h2 class="card_title"><span>Drink em Dobro</span></h2>'
        }
        normalPricePopup.classList.remove('disabled')
        descountPricePopup.style.display = 'none'
    }
    
    function dom(){
        h4_alerta.innerHTML = 'Promoções'
        my_1.innerHTML = 'Confira nossas promoções no link abaixo ou clicando em Promoções ao lado do cardapio.'
        const promocoes = document.querySelector('#promocoes > div.card_')

        priceRegular.forEach((price) =>{
            price.style.textDecoration ='none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
        })
       if(promocoes != null){
            promocoes.innerHTML = '<h2 class="card_title">Hoje Não Temos Promoções</h2>'
        }
        normalPricePopup.classList.remove('disabled')
        descountPricePopup.style.display = 'none'

    }
    
    li.forEach(function(li){
        li.addEventListener('click', () => {
            dias.innerHTML = li.textContent
            if(dias.textContent == 'Segunda-Feira'){
                seg_ter_qua()
                
            }else if(dias.textContent == 'Terça-Feira'){
                seg_ter_qua()
    
            }else if(dias.textContent == 'Quarta-Feira'){
                seg_ter_qua()
                
            }else if(dias.textContent == 'Quinta-Feira'){
                qui()
                
            }else if(dias.textContent == 'Sexta-Feira'){
                sex()
                
            }else if(dias.textContent == 'Sabado'){
                sab()
                
            }else if(dias.textContent == 'Domingo'){
                dom()
                
            }
        })
    })
    

}

