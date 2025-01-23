const pessoas = [
	{
		"nome": "Thomas Nicolas Augusto Souza",
		"idade": 79,
		"cpf": "979.950.986-69",
		"rg": "20.729.993-6",
		"data_nasc": "20/01/1946",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Josefa Jaqueline Sara",
		"pai": "Breno Antonio Kaique Souza",
		"email": "thomas-souza90@teofilorezende.com.br",
		"senha": "wDp6hziyqQ",
		"cep": "89224-067",
		"endereco": "Rua Waldemar João Domingos",
		"numero": 313,
		"bairro": "Jardim Iririú",
		"cidade": "Joinville",
		"estado": "SC",
		"telefone_fixo": "(47) 2994-4621",
		"celular": "(47) 99553-4615",
		"altura": "1,88",
		"peso": 100,
		"tipo_sanguineo": "B-",
		"cor": "amarelo"
	},
	{
		"nome": "Carla Sarah Tatiane Moraes",
		"idade": 63,
		"cpf": "316.922.694-02",
		"rg": "12.946.601-3",
		"data_nasc": "21/01/1962",
		"sexo": "Feminino",
		"signo": "Aquário",
		"mae": "Aurora Isis Beatriz",
		"pai": "Isaac Pedro Victor Moraes",
		"email": "carla_moraes@cenia.com.br",
		"senha": "B1b19t8cuX",
		"cep": "89287-150",
		"endereco": "Rua Romualdo Quint",
		"numero": 113,
		"bairro": "Rio Negro",
		"cidade": "São Bento do Sul",
		"estado": "SC",
		"telefone_fixo": "(47) 2555-2806",
		"celular": "(47) 99656-5057",
		"altura": "1,82",
		"peso": 59,
		"tipo_sanguineo": "B+",
		"cor": "roxo"
	},
	{
		"nome": "Hadassa Pietra Ayla da Silva",
		"idade": 66,
		"cpf": "248.102.715-95",
		"rg": "39.082.985-7",
		"data_nasc": "17/01/1959",
		"sexo": "Feminino",
		"signo": "Capricórnio",
		"mae": "Alessandra Stefany Renata",
		"pai": "Calebe Oliver Kauê da Silva",
		"email": "hadassa-dasilva99@seal.com.br",
		"senha": "BUjSBpTgFA",
		"cep": "77080-104",
		"endereco": "Rua 1",
		"numero": 509,
		"bairro": "Taquarussu",
		"cidade": "Palmas",
		"estado": "TO",
		"telefone_fixo": "(63) 2802-0351",
		"celular": "(63) 98837-6896",
		"altura": "1,65",
		"peso": 50,
		"tipo_sanguineo": "O-",
		"cor": "amarelo"
	},
	{
		"nome": "Gabrielly Antonella Jéssica Gomes",
		"idade": 63,
		"cpf": "189.272.286-00",
		"rg": "47.740.789-4",
		"data_nasc": "15/01/1962",
		"sexo": "Feminino",
		"signo": "Capricórnio",
		"mae": "Adriana Simone Clarice",
		"pai": "Fábio Henry Gomes",
		"email": "gabriellyantonellagomes@silnave.com.br",
		"senha": "z7JgbrxtE3",
		"cep": "68909-159",
		"endereco": "Rua Antônio Marcos",
		"numero": 578,
		"bairro": "Boné Azul",
		"cidade": "Macapá",
		"estado": "AP",
		"telefone_fixo": "(96) 3912-8046",
		"celular": "(96) 98631-9875",
		"altura": "1,52",
		"peso": 55,
		"tipo_sanguineo": "A+",
		"cor": "preto"
	},
	{
		"nome": "Andrea Luzia Araújo",
		"idade": 32,
		"cpf": "348.111.692-63",
		"rg": "27.629.990-5",
		"data_nasc": "20/01/1993",
		"sexo": "Feminino",
		"signo": "Capricórnio",
		"mae": "Tatiane Fátima Cláudia",
		"pai": "Caio Isaac Araújo",
		"email": "andrea.luzia.araujo@easytechconsultoria.com.br",
		"senha": "9Leujz33aq",
		"cep": "71884-518",
		"endereco": "Quadra QS 14 Conjunto 4",
		"numero": 767,
		"bairro": "Riacho Fundo II",
		"cidade": "Brasília",
		"estado": "DF",
		"telefone_fixo": "(61) 3884-5579",
		"celular": "(61) 98470-1147",
		"altura": "1,77",
		"peso": 61,
		"tipo_sanguineo": "A+",
		"cor": "vermelho"
	},
	{
		"nome": "Murilo Pedro Francisco Almada",
		"idade": 61,
		"cpf": "088.481.859-40",
		"rg": "12.896.553-8",
		"data_nasc": "18/01/1964",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Ayla Laura",
		"pai": "Antonio Breno Caio Almada",
		"email": "murilo.pedro.almada@igi.com.br",
		"senha": "R5nYmHSnIz",
		"cep": "49044-469",
		"endereco": "Rua Quarenta e Quatro-1",
		"numero": 814,
		"bairro": "Santa Maria",
		"cidade": "Aracaju",
		"estado": "SE",
		"telefone_fixo": "(79) 2986-8957",
		"celular": "(79) 99537-5616",
		"altura": "1,83",
		"peso": 59,
		"tipo_sanguineo": "AB-",
		"cor": "amarelo"
	},
	{
		"nome": "Cauã Yago da Mata",
		"idade": 70,
		"cpf": "703.757.356-66",
		"rg": "13.416.505-6",
		"data_nasc": "16/01/1955",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Tatiane Sandra",
		"pai": "Cauê Francisco Raimundo da Mata",
		"email": "cauayagodamata@technicolor.com",
		"senha": "FYhCMFNfDB",
		"cep": "49043-266",
		"endereco": "Rua Z",
		"numero": 887,
		"bairro": "São Conrado",
		"cidade": "Aracaju",
		"estado": "SE",
		"telefone_fixo": "(79) 2749-6309",
		"celular": "(79) 98591-6113",
		"altura": "1,82",
		"peso": 56,
		"tipo_sanguineo": "AB+",
		"cor": "azul"
	},
	{
		"nome": "Marlene Stella Ramos",
		"idade": 51,
		"cpf": "978.708.972-72",
		"rg": "45.712.843-4",
		"data_nasc": "23/01/1974",
		"sexo": "Feminino",
		"signo": "Aquário",
		"mae": "Adriana Hadassa Eloá",
		"pai": "Julio Guilherme Ramos",
		"email": "marlene_ramos@akto.com.br",
		"senha": "dF61u8QgM4",
		"cep": "65026-050",
		"endereco": "Travessa Neto Guterres",
		"numero": 304,
		"bairro": "Madre Deus",
		"cidade": "São Luís",
		"estado": "MA",
		"telefone_fixo": "(98) 3520-5892",
		"celular": "(98) 99363-1917",
		"altura": "1,62",
		"peso": 75,
		"tipo_sanguineo": "AB-",
		"cor": "azul"
	},
	{
		"nome": "Ryan Matheus Marcos Lopes",
		"idade": 73,
		"cpf": "979.492.965-42",
		"rg": "23.992.062-4",
		"data_nasc": "02/01/1952",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Hadassa Daiane",
		"pai": "Francisco Mateus Lopes",
		"email": "ryan_lopes@fibria.com.br",
		"senha": "zFFJTe29nu",
		"cep": "93214-450",
		"endereco": "Rua Ipiranga",
		"numero": 412,
		"bairro": "Centro",
		"cidade": "Sapucaia do Sul",
		"estado": "RS",
		"telefone_fixo": "(51) 2656-3247",
		"celular": "(51) 99908-0505",
		"altura": "1,88",
		"peso": 52,
		"tipo_sanguineo": "O-",
		"cor": "roxo"
	},
	{
		"nome": "Heloise Jaqueline Isabelle Vieira",
		"idade": 23,
		"cpf": "807.648.982-21",
		"rg": "25.556.013-8",
		"data_nasc": "21/01/2002",
		"sexo": "Feminino",
		"signo": "Aquário",
		"mae": "Jéssica Mariah Bianca",
		"pai": "Ryan Leonardo Yuri Vieira",
		"email": "heloise.jaqueline.vieira@i9tec.com.br",
		"senha": "6Xs094in1B",
		"cep": "66925-040",
		"endereco": "Avenida Beira-Mar",
		"numero": 408,
		"bairro": "Paraíso (Mosqueiro)",
		"cidade": "Belém",
		"estado": "PA",
		"telefone_fixo": "(91) 2964-2612",
		"celular": "(91) 99386-3625",
		"altura": "1,61",
		"peso": 87,
		"tipo_sanguineo": "O+",
		"cor": "roxo"
	}
];


function pesquisar(valor) {
    // coloque seu nome e veja se esta com o nome sujo!
    console.log("valorpesquisado:",valor)

    //kevin duarte almeida:
    // const nomes = ["joao","maria","kevin","pedro","julio","enio","luciane","gustavo","fernando"]
    // const resultado = nomes.filter(
    //     nome.filter(nome => nome.tolowercase().includes(valor.towercase())))
    
    // if (resultado.length > 0) {
    //     console.log("resultados encontrados:", resultado);
    //     //qualquer outro nome igual o seu, tambem ta sujo!
    // } else {
    //     console.log("nenhum resultado encontrado.");
    // }
}

function maisinformacao() {
    alert("sem informações sobre esse nome!");
}
    


function mostrarAviso() {
    alert("Seu nome esta sujo!");
}

function exibirPessoas() {
    document
        .querySelector("#sem-resultado")
        .style 
        .visibility = "hidden";
        
    document.querySelector(".lista-pessoas").innerHTML += pessoas
        .sort(function (a, b) {
            if (a.nome > b.nome) {
                return 1;
            }
            
            if (a.nome < b.nome) {
                return -1;
            }
            
            return 0;
        })
        .map(function (registro) {
            return `<tr>
                <td>${registro.nome}</td>
                <td>${registro.cpf}</td>
                <td>${registro.signo}</td>
                <td>${registro.bairro}</td>
                <td>${registro.idade}</td>
            </tr>`;
        }).join("");
}

exibirPessoas();
