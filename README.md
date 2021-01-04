# Cuidado Cristão

### Propósito:

Desenvolver e manter, colaborativamente, uma solução tecnológica _Open-Source_ (Código aberto) que permita melhorar a qualidade da proclamação do Evangelho do Senhor Jesus e promover a comunhão do Corpo de Cristo por meio do aumento na interação entre os visitantes, congregados e membros entre si e com a organização da Igreja Cristã, a fim de aumentar a comunhão do Corpo de Cristo como Igreja e como sociedade, bem como sustentar o número de voluntários aplicados aos serviços realizados pela igreja, denominados autodoadores.

### Objetivos:

- Fazer com que as lideranças compreendam a importância e se sintam envolvidas na comunicação com visitantes, congregados, membros e sociedade;
- Aumentar o número de interações das pessoas com com a Igreja nas mídias sociais;
- Aumentar o número de pessoas com afinidades às novas tecnologias envolvidas no trabalho de comunicação realizado pelas lideranças; e
- Aumentar o número de autodoadores nos diversos trabalhos realizados pelo "Corpo de Cristo".

### Benefícios Esperados:

- Melhor capacidade de comunicação entre os líderes e congregados, resultando na melhora na qualidade do Serviço à Cristo;
- Melhor capacidade de disseminação do Evangelho de Jesus pela Igreja Cristã, por meio das Mídias Sociais;
- Maior número de jovens envolvidos nas atividades desenvolvidas pelos setores e coordenadorias; e
- Maior número de autodoadores nos diversos trabalhos realizados pelo "Corpo de Cristo".

### Motivação:

A Igreja Cristã no Brasil vem sentindo a necessidade de melhorar a qualidade de comunicação com os visitantes, congregados, membros e sociedade há muito tempo, fato este que tem sido fonte de preocupação maior a medida em que, cada vez mais, as mídias sociais têm sido utilizadas como canal de “troca” (em diversos sentidos) entre as pessoas. Como resultado, percebeu-se que existe a necessidade de se ter um “elo tecnológico” centralizador das ações de comunicação com a missão principal de aumentar a interação. A gestão da autodoação (ou serviço voluntário) de membros e congregados para o serviço à Deus nas Igrejas Cristãs, atualmente, também se realiza de forma descentralizada e representa um baixo percentual de autodoadores em relação ao total de participantes dos cultos e demais atividades da Igreja.

_Para alcançar-se o objetivo de “Melhorar a qualidade da interação e sustentar o número de autodoadores”, se faz necessário que haja maior coordenação da integração entre as lideranças, as estruturas regimentais e os congregados e membros, realizável por meio "elo tecnológico" voltado à comunicação da Igreja Cristã com a sociedade._

## Tecnologias aplicadas

Para participar deste Projeto, é preciso ter comprovada experiência nas seguintes tecnologias:

- HTML 5
- Bootstrap v.4
- AngularNG v.11.x [[https://angular.io/docs]] (also @angular/cli)
- Node.js v.14.x [[https://nodejs.org/en/]]
- Express.js v.4.x [[https://expressjs.com/pt-br/]]
- Mongoose v.5.11.x [[https://mongoosejs.com/]]
- MongoDB [[https://www.mongodb.com/]]
- MailGun [[https://www.mailgun.com/]]
- Typescript/Javascript

## Regras para _'DevOps'_:

A base deste projeto segue os seguintes padrões:

- Controle de Tarefas: GtitHub Project at [[https://github.com/rogerio-fersan/cuidado-cristao/projects/1]]
- Controle de Versões por Git FLow [[https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow]]
<pre>
branch main - código-fonte da versão considerada "Última aprovada" (Last Release)
branch develop - código-fonte da versão em análise para aprovação (Next Release)
branch release/x.y.z - código-fonte da próxima versão a ser submetida para aprovação (Active Release)
branch feature/x.y.z - código-fonte da versão em desenvolvimento colaborativo (Next Feature to be released further)
</pre>
- Gerenciamento de Variáveis de Ambiente:
<pre>
#.env.example - [[https://www.npmjs.com/package/dotenv-safe]]
Arquivo .env.example - contém as chaves que devem existir obrigatóriamente para que a aplicação possa 'rodar'. Este arquivo faz parte do código-fonte
<pre>
ENV=
APP_NAME=
DATABASE_URL=
DATABASE_NAME=
HTTP_TIMEOUT=
SECRET=
MAIL_GUN_PRIVATE_API_KEY=
MAIL_GUN_PUBLIC_VALIDATION_KEY=
MAIL_GUN_WEBHOOK_SIGNING_KEY=
MAIL_GUN_MY_DOMAIN=
</pre>

#.env - [[https://www.npmjs.com/package/dotenv-safe]]
Arquivo .env - contém as chaves e os valores a serem utilizados para cada ambiente. Este arquivo Não pode ser submetido para o Git!

</pre>
* Ambiente de Desenvolvimento (_Desenv_) pelo colaborador: estação local compartilhando um *branch feature*: http://127.0.0.1:3000/
* Ambiente de Testes Alvo (_Staging_) do código-fonte existente no *branch develop*: https://cuidado-cristao.herokuapp.com/
* Ambiente de Produção (_Production_) baseado no *branch main*: _Cada Igreja Cristã usuária pode selecionar seu prório ambiente de produção. Vide REGRAS DE LICENCIAMENTO._

## Como colaborar com o Projeto?

Se você acredita que pode colaborar com nossos objetivos, de forma voluntária, seja como "Analista de Sistemas" ou "Full-Stack" (estamos nos referindo aos termos genéricos mesmo!), então preencha o formulário em [[https://docs.google.com/forms/d/e/1FAIpQLSdlS7IZ7Db2yvQ1WV07e-XDI7Pcbp92C-MDV_moCtAN3CkuiQ/viewform?usp=pp_url&entry.767263727=Sim,+estou+ciente+e+autorizo]] e nós entraremos em contato com você.

### Capacitação recomendada:

Se tu acreditas que estás aquém do que é preciso para colaborar conosco, recomendamos os seguintes canais de aprendizado:

- Luiz Tools [[https://www.luiztools.com.br/categoria/web/nodejs/]]
- Dev Média [[https://www.devmedia.com.br/tecnologia/]]

### Como estruturamos o framework?

Se você já tem alguma experiência nas tecnologias listadas acima, então basta uma lida no código-fonte e tudo irá ficar claro como a luz do dia!

Mas não nos custa te ajudar um pouco, afinal, quanto mais ágil, melhor XD. Vamos lá:

- O diretório /front-end contém um projeto AngularNG escolhido como framework de front-end. Nesta pasta há um arquivo angular.json que por sua vez contém ["outputPath": "../public"], ou seja, o comando _ng build_ irá publicar uma aplicação front-end compilada no diretório /public do framework Express.js;
- O diretório /bin contém o arquivo _www.js_. Este arquivo é parte do framework Express.js e atua como _Main Class_ do Projeto Node.js;
- O diretório /node_modules contém as bibliotecas javascript necessárias à aplicação. Não pode ser enviado para o GIT;
- O diretório /public contém as páginas html e demais _assets_ necessários ao funcionamento da aplicação. O framework entende que esta será a pasta raiz da aplicação, ou seja, quanto a aplicação estiver sendo executada, /public/index.html será disponibilizado pelo servidor como http://servidor:porta/index.html;
- O diretório /routes contém as regras de roteamento para o _backend_, de acordo com os padrões do framework Express.js sobre Node.js;
- O diretório /view contém as páginas que serão renderizadas pelo _backend_. Nosso projeto de interface deve ser focado no Angular, portanto, utilize este recurso somente para mensagens de erro e/ou funções administrativas. Para saber um pouco mais sobre como construir _views_ renderizáveis no _backend_, visite: https://expressjs.com/en/guide/using-template-engines.html.
- O arquivo /app.js contém o módulo central de nossa aplicação. Neste arquivo são definidas as dependências e configurações de ambiente. Neste arquivo são definidas as rotas requisitadas pelos navegadores e seus respectivos redirecionamentos.
- O diretõrio /test contém testes que podem ser executados por meio do comando shell #> npm test

### Como criar uma nova funcionalidade?

Atenção! Não é uma regra! Você é o programador qualificado e sua criatividade e método de trabalho são bem vindos, no entanto...
...recomendamos os seguintes passos:

<pre>
1º) Navegue para o diretorio /front-end e crie seu artefato @angular com o comando @angular/cli: $> ng generate componente|directive|pipe|service|class|guard|interface|enum|module. Caso seu artefato contemple requisições tais como REST|SOAP|Redis, retorne dados FAKE nesta etapa; 
2º) Teste seus artefatos adicionados na sua interface front-end utilizando o comando @angular/cli $> ng serve' a partir de /front-end. Observe que o diretório /public ainda não contém os artefatos criados;
3º) Crie suas rotas Express.js para responder as requisições GET|POST|DELETE|PUT definidas no 1º passo;
4º) Escreva seus testes unários para os verbos associados às rotas criadas no 3º passo;
5º) Navegue para a raiz do seu Projeto e teste, teste, teste, por meio do comando #> npm test;
6º) Modifique seus artefatos criados no 1º passo para conexão 'quase real' com os provedores de dados criados no 3º passo;
7º) Navegue para o diretório /front-end e "Compile" seu projeto de front-end por meio do comando @angular/cli: $> ng build. Observe que agora seu diretório /public foi atualizado com a inclusão/modificação de seus artefatos criados no 1º passo;
8º) Navegue para a pasta raiz do projeto e execute seu projeto Node.js/Express.js/AngularNG por meio do comando #> npm start.
</pre>

_Sinta-se a vontade para escrever e compartilhar conosco um *script* para automatizar estas etapas. Nós preferimos acompanhar cada passo bem de perto._
