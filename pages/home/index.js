

function jobsCard(jobs){
    const localizandoNaMain = document.querySelector(".containerCards")
    
    jobs.forEach(job => {
        const card = renderizarCards(job)
        
    });

}

// aqui estou renderiando via dom  as opções de vagas
function renderizarCards(job){
    

    const localizandoNaMain2 = document.querySelector('.containerCards')
    const ulContainer= document.createElement('ul')
    ulContainer.classList.add('containerCards')

    const liTituloEmpresaLugar= document.createElement('li')
    liTituloEmpresaLugar.classList.add('li_divTituloEmpresaLugar')

    const  divTituloEmpresaLugar = document.createElement('div')
    divTituloEmpresaLugar.classList.add('divTituloEmpresaLugar')

    const pTituloDoCard= document.createElement('p')
    pTituloDoCard.classList.add('tituloDoCard')
    pTituloDoCard.innerText= job.title

    const divContemEmpresaELocalizacao= document.createElement('div')
    divContemEmpresaELocalizacao.classList.add('divEmpresaELocalizacao')
    
    const pTituloEmpresa= document.createElement('p')
    pTituloEmpresa.classList.add('tituloEmpresa')
    pTituloEmpresa.innerText= job.enterprise
    console.log(pTituloEmpresa)

    const pTituloLocalizacao= document.createElement('p')
    pTituloLocalizacao.classList.add('tituloLocalizacao')
    pTituloLocalizacao.innerText= job.location
    console.log(pTituloLocalizacao)
    

    const pCardDescricao = document.createElement('p')
    pCardDescricao.classList.add('cardDescricao')
    pCardDescricao.innerText= job.descrition

    const dRemotoOfficeEBotao= document.createElement('div')
    dRemotoOfficeEBotao.classList.add('divRemotoOfficeEBotao')
    
    const spanHomeOffice= document.createElement('span')
    spanHomeOffice.classList.add('spanModalidade')
    spanHomeOffice.innerText= job.modalities[0]

    const buttonCandidatar= document.createElement('button')
    buttonCandidatar.classList.add('botaoCandidatar')
    buttonCandidatar.dataset.id= job.id
    buttonCandidatar.innerText = 'Candidatar'

    buttonCandidatar.addEventListener('click', () =>{
        if(buttonCandidatar.innerHTML == 'Candidatar'){
            renderizandoVagasEscolhidasClicandoNoBotao(buttonCandidatar, job)

            buttonCandidatar.innerHTML = 'Remover Candidatura';
        }
        else{
            document.getElementById( 'cardVaga' + job.id).remove()

            buttonCandidatar.innerHTML='Candidatar';
        }
    })
    
    listaVagas=[]
    let botaoRemover=document.createElement("button")
    botaoRemover.src="../../assets/img/removeVaga.png"
        botaoRemover.addEventListener('click', function(){
            
   
      
          const vagaRemovida = listaVagas.findIndex((item)=>{
            return item.id == job[i].id

          })
          carrinhoItens.splice(indexProdutoRemovido,1)
          somaEcontador()
 
         
       
         liProduto.remove()
          
        

        })


    divContemEmpresaELocalizacao.append(pTituloEmpresa,pTituloLocalizacao)
    divTituloEmpresaLugar.append(pTituloDoCard,divContemEmpresaELocalizacao)
    dRemotoOfficeEBotao.append(spanHomeOffice,buttonCandidatar)
    liTituloEmpresaLugar.append(divTituloEmpresaLugar,pCardDescricao,dRemotoOfficeEBotao)
    ulContainer.append(liTituloEmpresaLugar)
    
    localizandoNaMain2.append(ulContainer)
    console.log(localizandoNaMain2)
   

    
}
jobsCard(jobsData)
   
// nesta função, ao clicar no botão vai gerar card

function gerarCardVagaSelecionada(){
    const botoes = document.querySelectorAll('.botaoCandidatar')
    botoes.forEach(botao=>{
        botao.addEventListener('click', (event) => {
            const vagaPesquisa = jobsData.find(vaga => {
                return vaga.id == Number(event.target.dataset.id)
            })

            const vagaInteressada = {
                ... vagaPesquisa,
                cartId: cart.length+1
            }
            cart.push(vagaInteressada)
            renderizarCards

        })
    })
}

function renderizandoVagasEscolhidasClicandoNoBotao(elementoBotaoCandidatar, vagaRenderizada){
    const localizandoNoHtml = document.querySelector('.assideCard')
   
        
    const  divEnglobaTituloEmpresaLugar = document.createElement('div')
    divEnglobaTituloEmpresaLugar.classList.add('divTituloEmpresaLugar')

    const pTituloDoCardRenderizado= document.createElement('p')
    pTituloDoCardRenderizado.classList.add('tituloDoCard')
    pTituloDoCardRenderizado.innerText= vagaRenderizada.title

    const divEnglobaEmpresaELocalizacao= document.createElement('div')
    divEnglobaEmpresaELocalizacao.classList.add('divEmpresaELocalizacao')
    divEnglobaEmpresaELocalizacao.append(pTituloDoCardRenderizado)

    const pEnglobaTituloEmpresa= document.createElement('p')
    pEnglobaTituloEmpresa.classList.add('tituloEmpresa')
    pEnglobaTituloEmpresa.innerText= vagaRenderizada.enterprise
    

    const pEnglobaTituloLocalizacao= document.createElement('p')
    pEnglobaTituloLocalizacao.classList.add('tituloLocalizacao')
    pEnglobaTituloLocalizacao.innerText= vagaRenderizada.location

    const imagemLixeira = document.createElement('img')

    imagemLixeira.src="../../assets/img/removeVaga.png"
    imagemLixeira.width = 20;

    const botaoRemover = document.createElement('button')

    botaoRemover.append(imagemLixeira)

    divEnglobaTituloEmpresaLugar.id =  'cardVaga' + vagaRenderizada.id
    divGuardaTituloComBotao= document.createElement('div')
    
    divGuardaTituloComBotao.append(pTituloDoCardRenderizado,botaoRemover)
    divGuardaTituloComBotao.classList.add('divGuardaTituloComBotao')

    divEnglobaTituloEmpresaLugar.append(divGuardaTituloComBotao,botaoRemover,divEnglobaEmpresaELocalizacao,pEnglobaTituloEmpresa,pEnglobaTituloLocalizacao)
    
    botaoRemover.onclick = ()=>{
        divEnglobaTituloEmpresaLugar.remove();
        elementoBotaoCandidatar.innerHTML='Candidatar';
    };

    localizandoNoHtml.append(divEnglobaTituloEmpresaLugar)
   
    


}




//gerando via dom a abaVaga Selecionada
function abaVagasSelecionadas(){
    const selecionandoMain =document.querySelector('.assideCard')
    const container = document.createElement('li')
    const title = document.createElement('h2')
    const mensagem = document.createElement('p')

    // container.classList.add('liassideCard')
    title.innerText='Vagas selecionadas'
    title.classList.add('h2')
    mensagem.innerText= 'Você ainda não aplicou para nenhuma vaga'
    mensagem.classList.add('pAssideCard')
    container.append(title,mensagem)
    selecionandoMain.append(container)
    console.log(selecionandoMain)
    
   

}
abaVagasSelecionadas()
