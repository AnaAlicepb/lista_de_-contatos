<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Projeto de Lista de Contatos em React">
    <meta name="keywords" content="React, JavaScript, Redux, Styled-Components">
    <meta name="author" content="Ana Alice Rodrigues">

</head>
<body>

<header>
    <h1>Lista de Contatos</h1>
    <img src="/public/images/interface.png" alt="img" width="300" height="auto">
</header>

<details>
    <summary>Índice</summary>
    <ol>
        <li><a href="#sobre-o-projeto">Sobre o projeto</a></li>
        <li><a href="#parte-tecnica">Parte Técnica</a></li>
        <li><a href="#estrutura-dos-arquivos">Estrutura dos Arquivos</a></li>
        <li><a href="#casos-de-uso">Casos de Uso</a></li>
        <li><a href="#ferramentas">Ferramentas</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#como-clonar-instalar">Como Clonar e Instalar</a></li>
        <li><a href="#getting-started">Iniciando com Create React App</a></li>
    </ol>
</details>

<section id="sobre-o-projeto">
    <h2>Sobre o projeto</h2>
    <p>
        Este projeto é uma aplicação de Lista de Contatos desenvolvida em React. O objetivo é permitir que os usuários adicionem, editem e removam contatos de maneira eficiente e intuitiva. A interface é responsiva e adaptável a diferentes tamanhos de tela.
    </p>
    <p>
        Proposta de Valor: Oferecer uma maneira fácil e prática de gerenciar contatos, com uma interface amigável e acessível em dispositivos móveis e desktops.
    </p>
</section>

<section id="parte-tecnica">
    <h2>Parte Técnica</h2>
    <ul>
        <li>Frontend: React é utilizado para construir a interface do usuário. Styled-Components são utilizados para aplicar estilos de forma modular e manter o CSS em JS.</li>
        <li>Gerenciamento de Estado: Redux é utilizado para gerenciar o estado global da aplicação, permitindo a adição, edição e remoção de contatos.</li>
        <li>JavaScript: A linguagem principal para a lógica da aplicação.</li>
    </ul>
</section>

<section id="estrutura-dos-arquivos">
    <h2>Estrutura dos Arquivos</h2>
    <ul>
        <li>src/
            <ul>
                <li>components/
                    <ul>
                        <li>ContactForm.jsx: Componente para o formulário de adição de contatos.</li>
                        <li>ContactItem.jsx: Componente para cada item de contato.</li>
                        <li>ContactList.jsx: Componente para a lista de contatos.</li>
                    </ul>
                </li>
                <li>redux/
                    <ul>
                        <li>reducers.js: Redutores do Redux para gerenciar o estado dos contatos.</li>
                    </ul>
                </li>
                <li>styles/
                    <ul>
                        <li>ContactFormStyles.js: Estilos para o formulário de contatos.</li>
                        <li>ContactItemStyles.js: Estilos para os itens de contato.</li>
                        <li>ContactListStyles.js: Estilos para a lista de contatos.</li>
                        <li>GlobalStyles.js: Estilos globais para a aplicação.</li>
                    </ul>
                </li>
                <li>App.js: Componente principal da aplicação.</li>
                <li>index.js: Ponto de entrada da aplicação React.</li>
            </ul>
        </li>
    </ul>
</section>

<section id="casos-de-uso">
    <h2>Casos de Uso</h2>
    <ul>
        <li>Adicionar Contato: O usuário pode adicionar novos contatos preenchendo o formulário e clicando no botão "Adicionar Contato".</li>
        <li>Editar Contato: O usuário pode editar um contato existente clicando no botão "Editar" ao lado do contato.</li>
        <li>Remover Contato: O usuário pode remover um contato clicando no botão "Remover" ao lado do contato.</li>
    </ul>
</section>

<section id="ferramentas">
    <h2>Ferramentas</h2>
    <ul>
        <li><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="Badge React"></li>
        <li><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Badge Redux"></li>
        <li><img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Badge Styled-Components"></li>
        <li><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Badge JavaScript"></li>
        <li><img src="https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Badge Git"></li>
    </ul>
</section>

<section id="contato">
    <h2>Contato</h2>
    <ul>
        <li><a href="https://linktr.ee/anaeanali5" target="_blank"><img src="https://img.shields.io/badge/Ana_Alice_Rodrigues-blue?style=for-the-badge" alt="Perfil de Ana Alice Rodrigues"></a></li>
    </ul>
</section>

<section id="como-clonar-instalar">
    <h2>Como Clonar e Instalar</h2>
    <p>Siga as instruções abaixo para clonar e instalar as dependências do projeto.</p>
    <h3>Pré-requisitos</h3>
    <ul>
        <li>Node.js e npm instalados na máquina.</li>
        <li>Git instalado na máquina.</li>
    </ul>
    <h3>Passos</h3>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone https://github.com/seu-usuario/seu-repositorio.git</code></pre>
        </li>
        <li>Entre no diretório do projeto:
            <pre><code>cd seu-repositorio</code></pre>
        </li>
        <li>Instale as dependências:
            <pre><code>npm install</code></pre>
        </li>
        <li>Inicie a aplicação:
            <pre><code>npm start</code></pre>
        </li>
    </ol>
</section>

<section id="getting-started">
    <h2>Iniciando com Create React App</h2>
    <p>Este projeto foi inicializado com <a href="https://github.com/facebook/create-react-app" target="_blank">Create React App</a>.</p>
    <h3>Scripts Disponíveis</h3>
    <p>No diretório do projeto, você pode executar:</p>
    <h4><code>npm start</code></h4>
    <p>Executa o aplicativo em modo de desenvolvimento.<br>
    Abra <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> para visualizá-lo no seu navegador.</p>
    <p>A página será recarregada quando você fizer alterações.<br>
    Você também pode ver erros de lint no console.</p>
    <h4><code>npm test</code></h4>
    <p>Inicia o executor de testes no modo de observação interativa.<br>
    Veja a seção sobre <a href="https://facebook.github.io/create-react-app/docs/running-tests" target="_blank">execução de testes</a> para mais informações.</p>
    <h4><code>npm run build</code></h4>
    <p>Cria o aplicativo para produção na pasta <code>build</code>.<br>
    Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.</p>
    <p>A construção é minificada e os nomes dos arquivos incluem os hashes.<br>
    Seu aplicativo está pronto para ser implantado!</p>
    <p>Veja a seção sobre <a href="https://facebook.github.io/create-react-app/docs/deployment" target="_blank">implantação</a> para mais informações.</p>
    <h4><code>npm run eject</code></h4>
    <p><strong>Nota: esta é uma operação única. Depois de <code>eject</code>, você não pode voltar atrás!</strong></p>
    <p>Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode <code>eject</code> a qualquer momento. Este comando removerá a única dependência de construção do seu projeto.</p>
    <p>Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto <code>eject</code>, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa modificá-los. Neste ponto você está por sua própria conta.</p>
    <p>Você nunca precisa usar <code>eject</code>. O conjunto de recursos selecionados é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.</p>
    <h3>Saiba Mais</h3>
    <p>Você pode aprender mais na <a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank">documentação do Create React App</a>.</p>
    <p>Para aprender React, confira a <a href="https://reactjs.org/" target="_blank">documentação do React</a>.</p>
    <h3>Divisão de Código</h3>
    <p>Esta seção foi movida para aqui: <a href="https://facebook.github.io/create-react-app/docs/code-splitting" target="_blank">https://facebook.github.io/create-react-app/docs/code-splitting</a></p>
    <h3>Analisando o Tamanho do Bundle</h3>
    <p>Esta seção foi movida para aqui: <a href="https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size" target="_blank">https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size</a></p>
    <h3>Fazendo um Progressive Web App</h3>
    <p>Esta seção foi movida para aqui: <a href="https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app" target="_blank">https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app</a></p>
    <h3>Configuração Avançada</h3>
    <p>Esta seção foi movida para aqui: <a href="https://facebook.github.io/create-react-app/docs/advanced-configuration" target="_blank">https://facebook.github.io/create-react-app/docs/advanced-configuration</a></p>
    <h3>Implantação</h3>
    <p>Esta seção foi movida para aqui: <a href="https://facebook.github.io/create-react-app/docs/deployment" target="_blank">https://facebook.github.io/create-react-app/docs/deployment</a></p>
    <h3><code>npm run build</code> falha ao minificar</h3>
    <p>Esta seção foi movida para aqui: <a href="https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify" target="_blank">https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify</a></p>
</section>

</body>
</html>
