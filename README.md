# ocean-backend-intro

Este repositório contém o código de uma aula prática de **backend** utilizando **Node.js** e **Express**.

O objetivo do projeto é introduzir conceitos fundamentais do desenvolvimento de servidores em JavaScript, entre os quais:

- Configuração de um servidor HTTP com Express
- Definição de rotas e controladores
- Manipulação de requisições e respostas (JSON)
- Trabalhar com middlewares básicos

### Estrutura do projeto

```
index.js         # ponto de entrada da aplicação
package.json     # dependências e scripts
requests/        # exemplos de requisições HTTP para testar a API
    requests.http
```

### Como usar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node index.js
   ```
3. Use o arquivo `requests/requests.http` ou outra ferramenta (Postman, curl) para enviar requisições às rotas definidas.

> 📌 Este projeto foi desenvolvido durante uma aula introdutória de backend com Node.js e Express, como parte de estudos.
