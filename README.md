# ⚔️ Projeto Trybe Smith ⚔️


## Tecnologias Utilizadas
- TypeScript
- NodeJs
- Express
- Sequelize
- Docker
- MySQL
- JWT
- Joi
- Mocha
- Sinnon
- Chai 

### Endpoints

#### Produtos

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Criação de um produto | /products |
| `GET` | Lista todos os produtos | /products |
Nessa requisição é necessário informar o seguinte JSON:

```
{
  "name": "nome do produto",
  "amount": "1"
}
```

#### Usuário

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Criar um novo usuário e retorna o token | /user |
| `GET` | Retorna os dados não sensíveis de todos os usuário | /user |


Na requisição POST, é necessário informar a os dados o usuário no formato a seguir:

```
{
  "className": "Usuário Exemplo",
  "email": "usuario-exemplo@email.com",
  "password": "123456",
  "level": "1"
}
```

#### Pedidos
| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos os pedidos cadastrados | /orders |


```

