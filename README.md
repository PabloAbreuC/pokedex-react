## Introdução

PokeReact é uma aplicação feita utilizando ReactJS e a [api de pokemons](https://pokeapi.co/)

## Funcionalidades

A aplicação possui as seguintes features

-   Pesquisa de pokemon por nome
-   Listar todos os pokemons
-   Mostrar informações de um pokemon específico pelo nome
-   Listar todos os pokemons de determinado tipo

## API

A api de pokemons é robusta e constantemente atualizada, para esse projetos foram utilizados os endpoints abaixo.
Base: https://pokeapi.co/api/v2/

| ENDPOINT                                   | Retorno                                                                |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| pokemon/{name}                             | Retorna as informações de um pokemon pelo nome                         |
| pokemon?limit={quantidade}&offset={inicio} | Retorna as informações da {quantidade} de pokemons partido do {inicio} |
| type/{tipo}                                | Retorna todos os pokemons de um detminado {tipo}                       |

## Bibliotecas

-   React
-   Redux
-   Axios
-   Styled Components
