# GoBarber

Projeto do BootCamp da Rocketseat NodeJS

## Libs e configurações usadas

Sucrase - lib para poder usar 'import' e 'export' no NodeJS (DevDependencies)
Nodemon - lib para o servidor reestartar quando o código for alterado (DevDependencies)
EsLint - Unifica os modo de escrever código entre programadores
Prettier - pra deixar o código mais bonito
Sequelize - acesso ao banco dados
BCrypt - criptografia de senha
JsonWebToken - criar sessão de usuário com Token
Yup - validação de schema

## Sequelize

**Migration**

-   Criar o arquivo da migration: yarn sequelize migration:create --name=create-users
-   Rodar as migrations: yarn sequelize db:migrate
