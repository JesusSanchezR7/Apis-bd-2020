const express = require("express");
const morgan = require("morgan");
const Parser = require("body-parser");
const cors = require("cors");

var connection = require("./database/database");

const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);

app.use(morgan("dev"));
app.use(Parser.json());
app.use(cors({ origin: "*" }));


app.use('/API/servicioeventos/', require('./routes/api.routes'));

app.listen(port, () => {
  console.log("Estoy Funcionando: " + port);
});
