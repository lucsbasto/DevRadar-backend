# DevRadar-backend
## Backend do projeto desenvolvido em NodeJS na Semana Omnistack 10.0 

O projeto desenvolvido é um radar de desenvolvedores onde o sistema 
recebe as tecnologias e retorna todos os desenvolvedores que trabalham
com essa tecnologia em um raio específico.

## Clonando a aplicação
Clone a aplicação através do comando:

git clone https://github.com/lucsbasto/DevRadar-backend.git

## Instalando as dependências da aplicação
yarn install

Conectar ao seu cluster no mongodb Atlas:
Crie o arquivo .env na pasta raiz da aplicação.

PORT=3333
		  
MONGO_URL=mongodb+srv://<SEU_USUARIO>:<SUA_SENHA>@clusterapinodejs-lcggx.mongodb.net/test?retryWrites=true&w=majority

## Rotas
1. localhost:3333/devs (POST)

Exemplo de requisição enviada no body.

{
  "github_username": "lucsbasto",
  "techs": "NodeJs, Django",
  "latitude": -10.2092426,
  "longitude": -48.328996
}

2. localhost:3333/devs (GET)

Consulta realizada através da query: http://localhost:3333/devs

3. localhost:3333/search (GET)

Consulta realizada através das querys (latitude, longitude, stacks): http://localhost:3333/search?latitude=-10.2111874&longitude=-48.3265592&techs=angular (tecnologias são strings separadas por vírgulas. Ex: "NodeJS, ReactJs").

4. localhost:3333/devs/:github_username (DELETE)

Exemplo de requisição enviada na query.

localhost:3333/devs/:lucsbasto
