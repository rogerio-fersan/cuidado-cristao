/* ./mail/mailGunServer.js */
require("dotenv-safe").config();
const package = require("../../package.json");

const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAIL_GUN_PRIVATE_API_KEY,
  domain: process.env.MAIL_GUN_MY_DOMAIN,
});

var sendMail = function (
  to,
  subject = `Mensagem padronizada ${package.nomeIgreja}`,
  html = `<h2>Bem vindo! ${package.appName}</h2>`
) {
  let data = {
    from: package.emailIgreja,
    to: to,
    subject: subject,
    html: html,
  };
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(body);
    }
  });
};

module.exports = { sendMail };
