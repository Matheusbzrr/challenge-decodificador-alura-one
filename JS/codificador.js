const codificando = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

export function criptografando(texto) {
    for (let i = 0; i < codificando.length; i++) {
        let letra = codificando[i][0];
        let codigo = codificando[i][1];
        texto = texto.replaceAll(letra, codigo);
    }
    return texto;
}

export function descriptografando(texto) {
    for (let i = 0; i < codificando.length; i++) {
        let letra = codificando[i][0];
        let codigo = codificando[i][1];
        texto = texto.replaceAll(codigo, letra);
    }
    return texto;
}
