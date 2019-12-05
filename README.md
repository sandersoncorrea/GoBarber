<h1 align="center">
  GoBarber v1
</h1>

Projeto do BootCamp da Rocketseat NodeJS

## Libs e configurações usadas

-   Sucrase: lib para poder usar 'import' e 'export' no NodeJS (DevDependencies)
-   Nodemon: lib para o servidor reestartar quando o código for alterado (DevDependencies)
-   EsLint: Unifica os modo de escrever código entre programadores
-   Prettier: pra deixar o código mais bonito
-   Sequelize: ORM para acesso ao banco dados SQL
-   BCrypt: criptografia de senha
-   JsonWebToken: criar sessão de usuário com Token
-   Yup: validação de schema
-   Multer: para envio de arquivo
-   DateFNS: lidar com datas
-   Mongoose: ORM para acesso ao banco de dados não relacional MongoDB
-   NodeMailer: para envio de email
-   MailTrap: plataforma online para teste de recebimento de email
-   Youch: lib para tratativa de erros
-   DotEnv: lib para acessar variaveis ambiente no .env
-   Sentry: plataforma para receber os erros e domcumentar

## Sequelize

**Migration**

-   Criar o arquivo da migration: yarn sequelize migration:create --name=create-users
-   Rodar as migrations: yarn sequelize db:migrate
