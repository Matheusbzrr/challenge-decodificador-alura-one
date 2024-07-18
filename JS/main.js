import { criptografando, descriptografando } from './codificador.js';
import { getElement, showElement, hideElement, setText, getText, clearText, showAlert } from './dom.js';

const entradaTxt = getElement("#texto-criptador");
const saidaTxt = getElement("#sai-txt");

entradaTxt.addEventListener('focus', function() {
    clearText("#texto-criptador");
});

function verificaTexto(texto) {
    const verifica = /^[a-z ]+$/;
    return verifica.test(texto);
}

function exibirResultado() {
    hideElement("#saida");
    showElement("#botao-copiar");
}

function alertaConteudoTexto() {
    showAlert("O texto deve conter apenas letras minúsculas sem acentos para ser criptografado.");
}

function handleCriptografar() {
    let texto = getText("#texto-criptador");

    if (texto === '') {
        showAlert("Insira texto para ser codificado");
    } else if (verificaTexto(texto)) {
        const textoCriptografado = criptografando(texto);
        setText("#sai-txt", textoCriptografado);
        exibirResultado();
    } else {
        alertaConteudoTexto();
    }
}

function handleDescriptografar() {
    let texto = getText("#texto-criptador");

    if (texto === '') {
        showAlert("Insira texto para ser decodificado");
    } else if (verificaTexto(texto)) {
        const textoDescriptografado = descriptografando(texto);
        setText("#sai-txt", textoDescriptografado);
        exibirResultado();
    } else {
        alertaConteudoTexto();
    }
}

function copiarTxt() {
    navigator.clipboard.writeText(getText("#sai-txt")).then(() => {
        clearText("#sai-txt");
        showAlert("Texto copiado para a área de transferência.");
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}

getElement("#criptografar").addEventListener('click', handleCriptografar);
getElement("#descriptografando").addEventListener('click', handleDescriptografar);
getElement("#copiar").addEventListener('click', copiarTxt);
