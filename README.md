# Challenge decodificador de texto - Alura/ONE :lock:

## Apresentação :wave:

Este é um projeto desenvolvido como parte do desafio proposto pelo curso Alura/Oracle. 

## Objetivo :dart:

Aplicar tecnologias bases da web: HTML5, CSS3 e JavaScript, explorando novas funcionalidades dentro dessas tecnologias com o objetivo de criar um decodificador que possa criptografar e descriptografar mensagens.

## Funcionalidades :gear:

- Criptografar mensagens com base em um algoritmo pré-definido.
- Descriptografar mensagens previamente criptografadas.
- Copiar mensagens criptografadas ou descriptografadas para a área de transferência.

## Tecnologias Utilizadas :computer:

- ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Chave de Criptografia :key:

As "chaves" de criptografia que utilizamos são:

- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"

## Requisitos :clipboard:

- Funciona apenas com letras minúsculas.
- Não devem ser utilizados letras com acentos nem caracteres especiais.
- É possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

### Exemplo

- "gato" => "gaitober"
- "gaitober" => "gato"

## Extras :sparkles:

- Um botão que copia o texto criptografado/descriptografado para a área de transferência, ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

## O que Aprendi :memo:

### HTML

Ao trabalhar no arquivo `index.html` deste projeto, aprendi a estruturar corretamente uma página web utilizando HTML5. Utilizei elementos como, `<main>`, `<section>`, `<footer>`, e `<img>` para inserir imagens e garantir uma estrutura semântica adequada.

### CSS

Eu aprendi bastante sobre CSS ao trabalhar neste projeto. Criei regras de estilo para garantir que o conteúdo seja exibido corretamente. Isso me ajudou a entender como os diferentes elementos se comportam e a fazer ajustes para garantir que o conteúdo seja exibido corretamente.

### JavaScript

Ao trabalhar no arquivo `main.js` deste projeto, aprendi bastante sobre como manipular as funcionalidades básicas do JavaScript, como lidar com eventos, selecionar elementos HTML e alterar o conteúdo deles dinamicamente.

Consegui criar funcionalidades para o botão de codificar e decodificar as mensagens, além de adicionar comportamentos específicos para diferentes tipos de tela.

Também dividi o código JavaScript para melhorar a organização e a manutenção. O código está em três arquivos: `codificador.js`, `dom.js` e `main.js`.

- `codificador.js`: Contém a lógica de criptografia e descriptografia.
- `dom.js`: Contém funções auxiliares para manipulação do DOM.
- `main.js`: Coordena a interação entre a lógica de criptografia/descriptografia e a manipulação do DOM.

## Status :white_check_mark:

Concluído

![decodificador-github](https://github.com/user-attachments/assets/9dceb7a0-d76f-4c42-876e-8ef85d0f58e0)
