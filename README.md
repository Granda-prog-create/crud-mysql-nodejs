# API de controle de estoque

Nesse projeto é possível fazer entrada, adicionar e retirada de itens, fazer login e gerar relatórios em Excel. 

# Instalações 

1 - Express

2- Body-parser 

3 - Sequelize 

4 - MySQL 2 

Por ser um projeto em NodeJS, instale todos esses pacotes usando o npm install 

# Adicionando pacotes do Sequelize 

1 - CLI (npm install --save-dev sequelize-cli)

A flave -dev é para criar uma dependência de desenvolvimento. 

# .env

npm install dotenv

Essa biblioteca é responsável por acessar as variáveis de ambiente. 


# Pastas

Controllers - responsável por tratar todas as requisições. 

Middlewares - Fluxo de chamadas das rotas. 

Repositories - Funções que cuidam da comunicação com o database. 

Routes - As interligações entre os arquivos. 

Services - Responsável pelo tratamento das regras de negócios. 

Database - Arquivos do banco de dados. 

Validators - Fazer as validações da API. 

Utils - Mensagens padrão de erro. 

# Inicialização do database 

cd src

cd database 

npx sequelize-cli init 

# Instalação para o migrations do banco de dados

npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string,senha:string

Para fazer o migrate: npx sequelize-cli db:migrate 

# Criptografar as senhas

npm install bcrypt 

# Instalação de biblioteca para tratamento de erro

npm install http-errors 

# Capturar os erros 

npm install express-validator

# JSON Web Token

A instalação da biblioteca JSON Web Token é para possibilitar o acesso de mais de um usuário na plataforma. 

npm install jsonwebtoken 

# Migrations para o banco de dados

npx sequelize-cli model:generate --name item --attributes nome:string,quantidade:integer

npx sequelize-cli model:generate --name Saida --attributes quantidade:integer 

npx sequelize-cli model:generate --name Entrada --attributes quantidade:integer


# Criar relatórios

npm install exceljs


# Teste da API

Utilizei o software Postman para fazer os testes de rotas da API. 

Link para download: https://www.postman.com/ 
