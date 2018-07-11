# Projeto MyReads

Este é o primeiro projeto desenvolvido no Nanodegree de React realizado pela Udacity. O App possui três prateleiras de livros, quero ler, estou lendo e lido. A aplicação faz conexão com uma API da udacity em que proporciona todos os livros para adicionar nas devidas prateleiras.

## Como iniciar a aplicação

Para iniciar o ambiente de desenvolvimento, execute os seguintes comandos:

* instale todas as dependências da aplicação com `npm install`
* inicie o ambiente com `npm start`

## Estrutura do projeto
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # Termos para utilizar na busca da API disponível para o projeto.
├── package.json # arquivo de gerenciamento de pacotes npm.
├── public
│   ├── favicon.ico # ícone do React.
│   └── index.html # Arquivo onde se encontra o nó root para início da aplicação.
└── src
    ├── components # Pasta de componentes utilizados pela aplicação.
    │   │── __tests__ # Pasta de testes da aplicação
    │   │   ├── App.test.js
    │   │   ├── Book.test.js
    │   │   └── ShelfChanger.test.js
    │   ├── Book.js
    │   ├── BookDetails.js
    │   ├── BookShelf.js
    │   └── ShelfChanger.js
    ├── pages # Pasta de componentes que englobam os demais, ou seja, páginas
    │   ├── Home.js
    │   └── Search.js
    ├── App.css # Estilos específicos da aplicação.
    ├── App.js # Arquivo root da aplicação.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # ícones utilizados na aplicação.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Estilos globais.
    ├── setupTests.js # Configuração dos testes em Jest.
    ├── .babelrc # Configurações do Babel.
    ├── .eslintrc # Configuração do eslint.
    └── index.js # Utilizado para renderização.
```

## Importante

Para realizar buscas de livros na aplicação, utilize os termos encontrados no arquivo [SEARCH_TERMS.md](SEARCH_TERMS.md).