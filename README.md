# Como rodar o projeto de teste do Estadão

Este projeto esta dividido em duas partes contendo o frontend em Reactjs e uma API Restful

### Dependências globais

Você precisa ter duas principais dependências instaladas: 
- Node.js v20.16.0 (ou superior)
- Docker Engine: 24.0.6 com Docker Compose: v2.22.0

Para rodar o projeto em seu ambiente local faça um clone do repositório

```
git clone <nome do repositorio>
```

Após realizar o clone do repositório navegue até a pasta `web`

```
cd web
```

Crie um arquivo `.env` com base no arquivo `env.example`

```
cp env.example .env
```

Volte para a pasta raiz do projeto 

```
cd ..
```

Após isso rode o comando do docker para subir o ambiente completo da aplicação utilizando o comando abaixo

```
docker compose up -d --build
```

A depender da versão do docker compose que você tenha instalado em sua máquina pode ser necessário rodar o comando do docker compose contendo um traço `docker-compose`

No momento em que os containeres são iniciados o sistema roda as migrations e roda o seed para popular o banco de dados com as informações das noticias iniciais.


### Rodar os testes 

Foi construida apenas uma suite de testes unitários para validar as funções do CRUD de noticias. 

Para rodar os testes navegue até a pasta `api`
```
cd api
```

Rode o comando para instalar as dependências
```
npm install
```

Em seguida rode o comando para executar os testes

```
npm run test
```


