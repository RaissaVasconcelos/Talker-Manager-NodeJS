# Projeto - Talker Manager


![image](https://user-images.githubusercontent.com/76914915/194444475-79c2efb3-080d-404f-9052-865413e1e217.png)

![image](https://user-images.githubusercontent.com/76914915/194444509-045913f0-c581-4ca2-965c-328bb6fdc732.png)


## 

## 💻 Projeto

O projeto tem como objetivo criar operações CRUD de um arquivo em json com dados dos palestrantes

* Desenvolver operações em CRUD (Create, Read, Update e Delete) de palestrantes (talkers);

## 🚀 Tecnologias

* JavaScript
* NodeJS
* Express
* Docker


## :memo: Aprendizados

* Criar rotas para cada operação em CRUD solicitada na regra de negócio do projeto;
* Criar funções de leitura e escrita utilizando a biblioteca nativa FS do Node; 
* Aplicação de Middlewares para validações das rotas;
* Utilização da extensão Thunder Client para validar o funcionamento dos endpoints;


## 🛠 Instalação no Docker
Após clonar o repositório e acessar a pasta do projeto, execute:

 -> <code>docker-compose up -d</code>

Esse serviço irá inicializar um container chamado <code>talker_manager</code>.

A partir daqui você pode rodar o container via CLI.

 -> <code>docker exec -it talker_manager bash</code>.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

Instale as dependências!

 -> <code>npm install</code>.

Execute a aplicação com <code>npm start</code> ou <code>npm run dev</code>.
