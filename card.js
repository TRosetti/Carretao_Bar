document.addEventListener("DOMContentLoaded", function() {
    createCards().then(() => {
        changeMenu();
    });
});

function createCards() {
    return new Promise((resolve, reject) => {
        // Obtenha o contêiner onde os cards serão adicionados
        const cardContainer = document.getElementById("cardContainer");

        // Use a função fetch para carregar os dados do arquivo JSON
        fetch("cardapio.json")
            .then(response => response.json())
            .then(data => {
                // Itere sobre os dados e crie um card para cada item
                data.forEach(item => {
                    // Crie os elementos HTML para o card
                    const card = document.createElement("div");
                    card.classList.add("card_");
                    card.classList.add(item.class1)
                    card.classList.add(item.class2)
                    if(item.class3 != undefined){
                        card.classList.add(item.class3)
                    }

                    const card_content = document.createElement("div");
                    card_content.classList.add("card_content");


                    const card_title = document.createElement("h2");
                    card_title.classList.add('card_title')
                    card_title.textContent = item.title;

                    const card_text = document.createElement("p");
                    card_text.classList.add('card_text')
                    card_text.textContent = item.content;

                    const price = document.createElement('div');
                    price.classList.add('price');

                    const price1 = document.createElement('p');
                    price1.textContent = item.price1

                    const price2 = document.createElement('p');
                    price2.classList.add('price_discount')
                    price2.textContent = item.price2

                    const div_img = document.createElement('div')
                    div_img.classList.add('img')

                    const img = document.createElement('img')
                    img.src = item.img;

                    // Adicione os elementos ao card
                    card.appendChild(card_content);
                    card_content.appendChild(card_title);
                    card_content.appendChild(card_text);
                    card_content.appendChild(price);
                    price.appendChild(price1);
                    price.appendChild(price2);
                    card.appendChild(div_img);
                    div_img.appendChild(img);

                    // Adicione o card ao contêiner
                    cardContainer.appendChild(card);
                });

                // Resolva a Promise após criar todos os cards
                resolve();
            })
            .catch(error => {
                console.error("Erro ao carregar dados:", error);
                // Rejeite a Promise em caso de erro
                reject(error);
            });
    });
}

function changeMenu() {
    let hoje = new Date();
    let diaDaSemana = hoje.getDay();

    
    const h4_alerta = document.querySelector('.alert-heading')
    const my_1 = document.querySelector('.my-1')

 

    const dias = document.querySelector('.dias')
    const li = document.querySelectorAll('li')

    const priceRegular = document.querySelectorAll('.price p')
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
        my_1.innerHTML = 'Estamos fechado hoje, confira os dias de funcionamento clicando em Sobre ao lado de Promoções.'
    
        priceRegular.forEach((price) =>{
            price.style.textDecoration = 'none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
        })
        
    }
    
    function qui(){
        h4_alerta.innerHTML = 'Dia do Micão'
        my_1.innerHTML = 'Hoje cobramos uma taxa de R$20,00 por pessoa e o cardapio fica a <span>Preço de Custo</span>.'
        priceRegular.forEach((price) =>{
            price.style.textDecoration = 'line-through';
            price.style.color = 'black'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'block';
            price.style.textDecoration ='none';
            price.style.color = 'green'
        })
    }
    
    function sex(){
        h4_alerta.innerHTML = 'Promoção do Dia'
        my_1.innerHTML = 'Hoje o <span>Chop R$4,00</span> para as mesas que pedirem pelo menos uma carne.'

        priceRegular.forEach((price) =>{
            price.style.textDecoration ='none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
           
        })
    }
    
    function sab(){
        h4_alerta.innerHTML = 'Promoção do Dia'
        my_1.innerHTML = 'Hoje temos <span>Drink em Dobro</span>, peça 1 e leve 2.'
        priceRegular.forEach((price) =>{
            price.style.textDecoration ='none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
            
        })
    }
    
    function dom(){
        h4_alerta.innerHTML = 'Promoções'
        my_1.innerHTML = 'Confira nossas promoções no link abaixo ou clicando em Promoções ao lado do cardapio.'
        priceRegular.forEach((price) =>{
            price.style.textDecoration ='none'
            price.style.color = 'green'
        })
        priceQuinta.forEach((price) =>{
            price.style.display = 'none'
        })
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

