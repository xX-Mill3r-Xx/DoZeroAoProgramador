//01-acessando os elementos dos botões;
const botoesCarrossel =  document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//02-identificar o click no botão;
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        //03-desmarcar o botão selecionado;
        desativarBotaoSelecionado();

        //04-marcar o botão clicado como selecionado
        botao.classList.add('selecionado');

        //05-esconder a imagem ativa de fundo anterior;
        esconderImagemAtiva();

        //06-fazer aparecer a imagem de fundo correspondente ao botão clicado;
        imagens[indice].classList.add('ativa');
    })
})
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

