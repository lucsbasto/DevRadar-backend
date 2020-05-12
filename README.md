# DevRadar-backend

## Backend do projeto desenvolvido em NodeJS na Semana Omnistack 10.0

```
O projeto desenvolvido é um radar de desenvolvedores onde o sistema
recebe as tecnologias e retorna todos os desenvolvedores que trabalham
com essa tecnologia em um raio específico.
```


## APP Preview
[Find Dev](https://find-devs.netlify.app)

## Clonando a aplicação

Clone a aplicação através do comando:

```
git clone https://github.com/lucsbasto/DevRadar-backend.git
```

## Instalando as dependências da aplicação

```
yarn install
```

Nessa aplicação utilizei o Atlas, um mongodb online.
mais informações em [Mongo Atlas](https://www.mongodb.com).

Crie o arquivo .env na pasta raiz da aplicação e coloque a porta e a url do fornecida pelo mongo atlas.

```
PORT=3333
MONGO_URL=mongodb+srv://**<SEU_USUARIO>**:**<SUA_SENHA>**@clusterapinodejs-lcggx.mongodb.net/test?retryWrites=true&w=majority
```

## Rotas

**POST**

```
- localhost:3333/devs
```

```json
  Exemplo de requisição enviada no body.
  {
  "github_username": "lucsbasto",
  "techs": "NodeJs, Django",
  "latitude": -10.2092426,
  "longitude": -48.328996
  }
```

**GET**

```
- localhost:3333/devs
```

**GET**

```
- localhost:3333/search
```

**GET**

```
  Consulta realizada através das querys: latitude, longitude, techs

 - http://localhost:3333/search?latitude=-10.2111874&longitude=-48.3265592&techs=angular
```

**DELETE**

```
- localhost:3333/devs/:github_username
```
