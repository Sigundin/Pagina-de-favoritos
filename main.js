const novoElemento = document.querySelector('.botaoadicionar');
const elementoPai = document.querySelector('.favoritos')

novoElemento.addEventListener('click', ()=>{
    criaElemento()
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