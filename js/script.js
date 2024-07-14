var setaDireita = window.document.querySelector('#seta-direita');
var setaEsqueda = window.document.querySelector('#seta-esqueda');
var Leornado = window.document.querySelector('#leornado');
var Samanta = window.document.querySelector('#samanta');
var Bruna = window.document.querySelector('#bruna');

function RolarParaDireita(){
    Leornado.style= 'display: none';
    Bruna.style= 'display: flex';
    setaDireita.style='display:none';
    setaEsqueda.style='display:flex; margin-top: 75px';
}

function RolarEsqueda(){
    Leornado.style= 'display: flex';
    Bruna.style= 'display:none';
    setaDireita.style='display:flex';
    setaEsqueda.style='display:none';
}