
# Cuidado Cristão

### Propósito:
Desenvolver e manter, colaborativamente, uma solução tecnológica _Open-Source_ (Código aberto) que permita melhorar a qualidade da proclamação do Evangelho do Senhor Jesus e promover a comunhão do Corpo de Cristo por meio do aumento na interação entre os visitantes, congregados e membros entre si e com a organização da Igreja Cristã, a fim de aumentar a comunhão do Corpo de Cristo como Igreja e como  sociedade, bem como sustentar o número de voluntários aplicados aos serviços realizados pela igreja, denominados autodoadores.

### Objetivos:
* Fazer com que as lideranças compreendam a importância e se sintam envolvidas na comunicação com visitantes, congregados, membros e sociedade;
* Aumentar o número de interações das pessoas com com a Igreja nas mídias sociais;
* Aumentar o número de pessoas com afinidades às novas tecnologias envolvidas no trabalho de comunicação realizado pelas lideranças; e
* Aumentar o número de autodoadores nos diversos trabalhos realizados pelo "Corpo de Cristo".

### Benefícios Esperados:
* Melhor capacidade de comunicação entre os líderes e congregados, resultando na melhora na qualidade do Serviço à Cristo;
* Melhor capacidade de disseminação do Evangelho de Jesus pela Igreja Cristã, por meio das Mídias Sociais;
* Maior número de jovens envolvidos nas atividades desenvolvidas pelos setores e coordenadorias; e
* Maior número de autodoadores nos diversos trabalhos realizados pelo "Corpo de Cristo".

### Motivação:	
A Igreja Cristã no Brasil vem sentindo a necessidade de melhorar a qualidade de comunicação com os visitantes, congregados, membros e sociedade há muito tempo, fato este que tem sido fonte de preocupação maior a medida em que, cada vez mais,  as mídias sociais têm sido utilizadas como canal de “troca” (em diversos sentidos) entre as pessoas. Como resultado, percebeu-se que existe a necessidade de se ter um “elo tecnológico” centralizador das ações de comunicação com a missão principal de aumentar a interação. A gestão da autodoação (ou serviço voluntário) de membros e congregados para o serviço à Deus nas Igrejas Cristãs, atualmente, também se realiza de forma descentralizada e representa um baixo percentual de autodoadores em relação ao total de participantes dos cultos e demais atividades da Igreja. 
  
*Para alcançar-se o objetivo de “Melhorar a qualidade da interação e sustentar o número de autodoadores”, se faz necessário que haja maior coordenação da integração entre as lideranças, as estruturas regimentais e os congregados e membros, realizável por meio "elo tecnológico" voltado à comunicação da Igreja Cristã com a sociedade.*

## Tecnologias aplicadas

Para participar deste Projeto, é preciso ter comprovada experiência nas seguintes tecnologias:
* HTML 5
* Bootstrap v.4
* AngularNG v.11.x [[https://angular.io/docs]] (also @angular/cli)
* Node.js v.14.x [[https://nodejs.org/en/]]
* Express.js v.4.x [[https://expressjs.com/pt-br/]]
* Mongoose v.5.11.x [[https://mongoosejs.com/]]
* MongoDB [[https://www.mongodb.com/]]
* MailGun [[https://www.mailgun.com/]]

## Regras para _'DevOps'_:

A base deste projeto segue os seguintes padrões:
* Controle de Tarefas:
* Controle de Versões por Git FLow [[https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow]]
<pre>
branch master - código-fonte da versão considerada "Última aprovada" (Last Release)
branch develop - código-fonte da versão em análise para aprovação (Next Release)
branch release/x.y.z - código-fonte da próxima versão a ser submetida para aprovação (Active Release)
branch feature/x.y.z - código-fonte da versão em desenvolvimento colaborativo (Next Feature to be released further)
</pre>
* Gerenciamento de Variáveis de Ambiente:
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
* Ambiente de Testes Alvo (_Staging_) do código-fonte existente no *branch develop*: https://cuidado-cristao.herokuapp.com/
* Ambiente de Produção: _Cada Igreja Cristã usuária pode selecionar seu prório ambiente de produção. Vide REGRAS DE LICENCIAMENTO._

## Como colaborar com o Projeto?
Se você acredita que pode colaborar com nossos objetivos, de forma voluntária, seja como "Analista de Sistemas" ou "Full-Stack" (estamos nos referindo aos termos genéricos mesmo!), então preencha o formulário em [[https://docs.google.com/forms/d/e/1FAIpQLSdlS7IZ7Db2yvQ1WV07e-XDI7Pcbp92C-MDV_moCtAN3CkuiQ/viewform?usp=pp_url&entry.767263727=Sim,+estou+ciente+e+autorizo]] e nós entraremos em contato com você.

### Capacitação recomendada:
Se tu acreditas que estás aquém do que é preciso para colaborar conosco, recomendamos os seguintes canais de aprendizado:
* Luiz Tools [[https://www.luiztools.com.br/categoria/web/nodejs/]]
* Dev Média [[https://www.devmedia.com.br/tecnologia/]]
