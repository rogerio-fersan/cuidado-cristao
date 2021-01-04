const superagent = require("superagent");
const assert = require("assert").strict;
require("dontenv-safe");

const getPorta = function () {
  return process.env.ENV === "production" ? "80" : "3000";
};
let port = getPorta();
//info.js routing
superagent.get("localhost:" + port + "/info").end(function (e, res) {
  assert.strictEqual(
    e,
    null,
    `Tem certeza de que o Servidor está "Rodando" na porta ${port}?  
       - ${e}.`
  );
});
