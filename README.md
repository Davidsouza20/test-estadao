# Como rodar o projeto de teste do Estadão

Este projeto esta dividido em duas partes contendo o frontend em Reactjs e uma API Restful

Para rodar o projeto em seu ambiente local faça um clone do repositório

```
git clone <nome do repositorio>
```

Após realizar o clone do repositório rode o comando do docker para subir o ambiente completo da aplicação utilizando o comando abaixo

```
docker compose up -d --build
```

A depender da versão do docker compose que você tenha instalado em sua máquina pode ser necessário rodar o comando do docker compose contendo um traço `docker-compose`

No momento em que os containeres são iniciados o sistema roda as migrations e roda o seed para popular o banco de dados com as informações das noticias iniciais.
