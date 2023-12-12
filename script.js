function bionicReading() {
    var elementos = document.querySelectorAll('.bio-reading');
    elementos.forEach(function (elemento) {
        elemento.style.fontWeight = 'bold';
    });
}

function textoNormal() {
    var elementos = document.querySelectorAll('.bio-reading');
    elementos.forEach(function (elemento) {
        elemento.style.fontWeight = 'normal';
    });
    var textos = document.querySelectorAll('.about-text');
    textos.forEach(function (elemento) {
        elemento.style.fontSize = '16px';
    });
}

function aumentarTexto() {
    var elementos = document.querySelectorAll('.about-text');
    elementos.forEach(function (elemento) {
        var tamanhoTexto = window.getComputedStyle(elemento).fontSize;
        var tamanhoTextoNumerico = parseFloat(tamanhoTexto);
        var novoTamanho = tamanhoTextoNumerico + 2;
        elemento.style.fontSize = novoTamanho + 'px';
    });
}

function diminuirTexto() {
    var elementos = document.querySelectorAll('.about-text');
    elementos.forEach(function (elemento) {
        var tamanhoTexto = window.getComputedStyle(elemento).fontSize;
        var tamanhoTextoNumerico = parseFloat(tamanhoTexto);
        var novoTamanho = tamanhoTextoNumerico - 2;
        elemento.style.fontSize = novoTamanho + 'px';
    });
}