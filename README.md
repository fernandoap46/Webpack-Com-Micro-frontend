# Webpack com Micro-frontend

Este repositório contém um projeto de exemplo que demonstra como usar o Webpack com a técnica de Micro-frontend. O objetivo é mostrar como dividir uma aplicação em partes menores e independentes, facilitando a manutenção e o desenvolvimento paralelo.

## Estrutura do Projeto

O projeto está dividido em vários pacotes, cada um representando um micro-frontend:

- **app**: Aplicação principal que consome os micro-frontends.
- **contact**: Micro-frontend responsável pela funcionalidade de contato.
- **home**: Micro-frontend responsável pela página inicial.
- **ConsultOwnPicking**: Micro-frontend responsável pela funcionalidade de consulta.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/fernandoap46/Webpack-Com-Micro-frontend.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd Webpack-Com-Micro-frontend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Executando o Projeto

Para iniciar a aplicação principal e os micro-frontends, execute os seguintes comandos em terminais separados:

1. Inicie a aplicação principal:
    ```bash
    cd packages/app
    npm start
    ```

2. Inicie o micro-frontend de contato:
    ```bash
    cd packages/contact
    npm start
    ```

3. Inicie o micro-frontend de home:
    ```bash
    cd packages/home
    npm start
    ```

4. Inicie o micro-frontend de consulta:
    ```bash
    cd packages/ConsultOwnPicking
    npm start
    ```

## Estrutura de Pastas

- **packages**: Contém todos os micro-frontends e a aplicação principal.
  - **app**: Aplicação principal.
  - **contact**: Micro-frontend de contato.
  - **home**: Micro-frontend de home.
  - **ConsultOwnPicking**: Micro-frontend de consulta.

## Tecnologias Utilizadas

- Webpack 5
- React
- Module Federation
- Styled-components

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
