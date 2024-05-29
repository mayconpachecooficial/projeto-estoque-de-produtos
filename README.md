Projeto de Gestão de Estoque
Este é um projeto de Gestão de Estoque desenvolvido utilizando Next.js, Chakra UI, MySQL, Express, CORS e React Icons. O sistema permite que os usuários se registrem, façam login e, uma vez autenticados, acessem um painel de controle para gerenciar o balanço de produtos, incluindo a adição, alteração e atualização de quantidades de produtos no banco de dados MySQL.

Tecnologias Utilizadas
Next.js: Framework React para desenvolvimento de aplicações web.
Chakra UI: Biblioteca de componentes para construção de interfaces de usuário responsivas e acessíveis.
MySQL: Sistema de gerenciamento de banco de dados relacional.
Express: Framework para construção de APIs em Node.js.
CORS: Middleware para permitir requisições entre diferentes origens.
React Icons: Biblioteca de ícones para utilização em projetos React.
Funcionalidades
Registro de Usuário: Permite que novos usuários criem uma conta no sistema.
Login de Usuário: Usuários registrados podem fazer login para acessar o painel de controle.
Painel de Controle: Após o login, os usuários podem:
Adicionar novos produtos ao estoque.
Alterar informações existentes de produtos.
Atualizar as quantidades de produtos no estoque.
Integração com MySQL: Todas as operações de produtos são integradas ao banco de dados MySQL, garantindo a persistência e consistência dos dados.
Pré-requisitos
Node.js
MySQL
Instalação
Clone o repositório:

bash
Copiar código
git clone (https://github.com/mayconpachecooficial/projeto-estoque-de-produtos)
cd projeto-estoque-de-estoque
Instale as dependências do projeto:

bash
Copiar código
npm install
Configure o banco de dados MySQL:

Crie um banco de dados no MySQL.
Atualize as credenciais do banco de dados no arquivo de configuração (por exemplo, config.js ou .env).
Inicie o servidor Express:

bash
Copiar código
cd server
npm start
Inicie o servidor Next.js:

bash
Copiar código
cd client
npm run dev
Uso
Acesse a aplicação em http://localhost:3000.
Registre-se como um novo usuário ou faça login com uma conta existente.
Após o login, acesse o painel de controle para gerenciar os produtos.
Estrutura do Projeto
bash
Copiar código
/client          # Código fonte do frontend em Next.js
/server          # Código fonte do backend em Express
Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature ou correção: git checkout -b minha-feature.
Commit suas mudanças: git commit -m 'Minha nova feature'.
Faça o push para a branch: git push origin minha-feature.
Abra um Pull Request.
Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

Contato
Para mais informações, entre em contato com seu-nome.
