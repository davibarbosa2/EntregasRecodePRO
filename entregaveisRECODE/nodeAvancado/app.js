const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const buscaCep = require("./src/functions/buscaCep");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// declarando que vou usar o ejs
app.set("view engine", "ejs");
// express busca o caminho da pasta view
app.set("views", "./src/views");

// renderizando a pagina principal
app.get("/", (req, res) => {
	// chamada para a pagina view
	res.render("index");
});

// pegando os dados da view
app.post("/envia-cep", async (req, res) => {
	const { cep } = req.body;
	const resultado = await buscaCep(cep);

	res.render("resultado", { dado: resultado });
});

app.listen(3333);