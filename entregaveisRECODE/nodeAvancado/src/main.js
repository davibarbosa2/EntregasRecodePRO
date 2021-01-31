const cep = document.querySelector("#cep");

const showData = (result) => {
	for (const campo in result) {
		if (document.querySelector("#" + campo)) {
			// filtrando para que apenas os dados que estão no form sejam retornados
			document.querySelector("#" + campo).value = result[campo];
			// preenchendo os dados no formulario ao dar "TAB"
		}
	}
};

cep.addEventListener("blur", (e) => {
	//ao dar "TAB" os dados são preenchidos no form
	let search = cep.value.replace("-", ""); //substitui o hifen por um caractere vazio
	const options = {
		//requisição para pegar os dados do VIACEP
		method: "GET",
		mode: "cors",
		cache: "default",
	};

	//Tratando o arquivo JSON

	fetch(`https://viacep.com.br/ws/${search}/json/`, options)
		.then((response) => {
			response.json().then((data) => {
				showData(data);
			});
		})
		.catch((e) => console.log("Deu ruim :(" + e, message));
});
