 # flixCast

### Descrição
O flixCast é um aplicativo para listagem de podcasts por categoria, focado em fornecer uma experiência organizada e intuitiva para os usuários.

### Domínio
Listagem de podcasts em vídeo.

### Features
- Listar episódios por categorias:
  - Saúde
  - Fitness
  - Mentalidade
  - Humor
  - Geopolítica
- Filtrar podcasts por apresentador, convidados e categoria.

## Como

### Feature
Listar episódios por categorias.

### Como vou implementar
Vou retornar uma API REST com nome do podcast, nome do episódio, imagem de capa e link.

```js
[
  {
    podcastName: "Flow",
    episodio: "CBUM - Flow #319",
    videoId: "",
    cover: "",
    link: "",
    categories: ["Saúde", "Fitness"]
  },
  {
    podcastName: "Flow",
    episodio: "CBUM - Flow #319",
    videoId: "",
    cover: "",
    link: "",
    categories: ["Saúde", "Fitness"]
  }
]
```


### Estrutura do Projeto
```
flixCast/
├── controllers/
│   └── podcasts-controllers.js
├── routes/
│   └── routes.js
├── utils/
│   └── http-methods.js
└── app.js
```

### Rotas da API
- `GET /list`: Lista todos os episódios categorizados.
- `GET /episodes`: Filtra episódios por apresentador, convidados e categoria.

## Instruções de Uso
1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Execute o servidor com `npm run start:dev`.

## Tecnologias Utilizadas
- Node.js
- Express.js (ou http module)
- JavaScript

## Contribuições
Sinta-se à vontade para contribuir enviando pull requests ou abrindo issues para sugerir melhorias e novas features.