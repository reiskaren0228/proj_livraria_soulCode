# CodeTechLibrary

Bem-vindo ao repositório do projeto CodeTechLibrary, uma aplicação CRUD de uma livraria desenvolvida com React e Firebase. 

## Descrição

O projeto CodeTechLibrary é uma aplicação web simples para gerenciar livros em uma livraria. A aplicação permite as seguintes operações básicas de CRUD:

- **Create**: Adicionar novos livros à livraria.
- **Read**: Listar todos os livros disponíveis.
- **Update**: Editar informações dos livros existentes.
- **Delete**: Remover livros da livraria.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Firebase**: Plataforma de desenvolvimento de aplicativos que inclui Firestore para gerenciamento do banco de dados.

## Estrutura do Projeto

```bash
proj_livraria_soulCode/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── AddBook.js
│ │ ├── EditBook.js
│ │ └── BookList.js
│ ├── firebase.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
├── .gitignore
├── package.json
└── README.md
```

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/reiskaren0228/proj_livraria_soulCode.git
   cd proj_livraria_soulCode

2. Instale as dependências:

```bash
    npm install
```

3. Configure o Firebase:

Crie um projeto no Firebase.
Adicione um aplicativo web ao seu projeto Firebase e copie as configurações do Firebase.
Crie um arquivo firebase.js na pasta src e adicione as configurações do Firebase.

4. Inicie o projeto:

```bash
   npm start
```

5. Acesse a aplicação em seu navegador:

```bash
   http://localhost:3000
```

## Funcionalidades
- Adicionar Livro: Permite adicionar um novo livro com título e autor.
- Listar Livros: Exibe uma lista de todos os livros adicionados.
- Editar Livro: Permite editar as informações de um livro existente.
- Excluir Livro: Permite remover um livro da lista.

## Contribuição

Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## Se você tiver alguma dúvida ou sugestão, não hesite em abrir uma issue ou entrar em contato.
