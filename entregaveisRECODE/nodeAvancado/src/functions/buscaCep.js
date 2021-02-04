const fetch = require("node-fetch");

module.exports = async function buscaCep(uf,localidade,ddd) {
	const response = await fetch(`https://viacep.com.br/ws/${uf}/${localidade}/${ddd}/json/`);
	const json = await response.json();

	return json;
};
