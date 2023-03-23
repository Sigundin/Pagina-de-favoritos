const novoElemento = document.querySelector('.botaoadicionar');
const elementoPai = document.querySelector('.favoritos');
const pegaImagem = document.querySelector("#imagem");
const imagemSelecionada = document.querySelector('.botaoImagem');
const favorito = document.querySelector('.cardFavoritos');
const salvar = document.querySelector('.botaoSalvar');
const link = document.querySelector('.link')


novoElemento.addEventListener('click', ()=>{
    criaElemento()
});

pegaImagem.addEventListener('change', function(evento){
    //evento alvo
    const arquivoAlvo = evento.target;
    //recebe o arquivo
    const arquivo = arquivoAlvo.files[0];

    if(arquivo){
        //if para verificar se há arquivo presente
        //leitor para criar objeto do tipo leitor de arquivo
        const leitor = new FileReader();
        leitor.addEventListener('load', function(evento){
            const leitorAlvo = evento.target;

            const imagem = document.createElement('img');
            imagem.setAttribute('class', 'ImagemFav');
            //pega o elemento imagem criada e atribui a ela o leitorAlvo que é
            //
            imagem.src = leitorAlvo.result;
            salvar.addEventListener('click',()=>{
                elementoFavorito()
            })
        })

        //pega o arquivo e transforma numa URL para usar em JS e criar um elemento com a imagem
        leitor.readAsDataURL(arquivo);

    } else{
        imagemSelecionada.innerHTML = "Selecione uma imagem";
    }

    
});



function criaElemento(){
    //criação dos elementos
    var elementoNovo = document.createElement('div')
    elementoNovo.setAttribute('class', 'cardFavoritos')
    var tituloElemento = document.createElement('h1')
    tituloElemento.setAttribute('class', 'tituloFavoritos')
    var textoTitulo = document.createTextNode('Canal')
    var imagemRecebida = document.createElement('input')
    imagemRecebida.setAttribute('class', 'arquivoImagem')
    imagemRecebida.setAttribute('type', 'file')
    var link = document.createElement('input')
    link.setAttribute('type', 'text')
    link.setAttribute('class', 'link')
    link.setAttribute('placaholder', 'Digite seu link')

    //adicionando como filhos
    elementoPai.appendChild(elementoNovo)
    elementoNovo.appendChild(tituloElemento)
    elementoNovo.appendChild(imagemRecebida)
    elementoNovo.appendChild(link)
    tituloElemento.appendChild(textoTitulo)
}

function elementoFavorito(){
    //esconde elementos
    imagemSelecionada.style.display = "none";
    link.style.display = "none";
    salvar.style.display = "none";

    //variáveis elementos
    var titulo = document.querySelector('.tituloFavoritos');
    var imagem = document.querySelector('.imagemFav');
    var novoLink = document.createElement('a');
    novoLink.setAttribute('class', 'linkFav');
    novoLink.setAttribute('href', link);
    //alterações HTML
    titulo.innerHTML = "Canal Favorito";
    novoLink.innerHTML = link.value;
    //elementos filhos
    favorito.appendChild(novoLink);
    
}