# ProjetoFullstack
README.md - Projeto ASP.NET Core 

Este projeto é um exemplo básico de como usar o ASP.NET Core com o modelo MVC para criar uma aplicação web com operações CRUD em um banco de dados MariaDB.

Tecnologias utilizadas
ASP.NET Core 3.1
Entity Framework Core 3.1
C#
Angular 14.3.0

Pré-requisitos
.NET Core SDK 3.1 ou superior
Node.js e npm instalados
Um servidor de banco de dados MariaDB

Instalação
Clone este repositório em sua máquina local usando o comando:
```
git clone https://github.com/jessicaTM9/ProjetoFullstack.git
```
Abra o projeto em sua IDE preferida.
Execute o comando abaixo para instalar as dependências do Angular:

```
cd ClientAppAdmin
npm install
```

Execute o comando abaixo para criar o banco de dados a partir das migrações:
```
dotnet ef database update
```
Uso
Execute o projeto usando o Visual Studio ou o comando abaixo na raiz do projeto:
```
dotnet run
```
sql
Copy code
```
dotnet ef database update
```
Certifique-se de ter as ferramentas do Entity Framework Core instaladas globalmente em sua máquina.


Funcionalidades
O projeto é uma aplicação web básica que permite ao usuário listar, adicionar, editar e excluir clientes e endereços e ainda precisa de melhorias.

Estrutura do projeto
appsettings.json: arquivo de configuração da aplicação, onde as strings de conexão do banco de dados são definidas.
Controllers/: contém os controladores da aplicação.
Data/: contém as classes que definem as entidades e o contexto do banco de dados.
Migrations/: contém as migrações do banco de dados.
Services/: contém as classes que definem os serviços responsáveis por executar as operações CRUD no banco de dados.
Views/: contém as visualizações em HTML da aplicação.
Contribuindo
Sinta-se à vontade para contribuir com sugestões, melhorias, novas funcionalidades ou correções de bugs.
