const prompt = require("prompt-sync")();

const campeoes = [
  "Batman",
  "Kratos",
  "Sakura",
  "Goku",
  "Naruto",
  "Luffy",
  "Jinx",
];

function calcularRank(saldo) {
  if (saldo < 10) return "Ferro";
  if (saldo <= 20) return "Bronze";
  if (saldo <= 50) return "Prata";
  if (saldo <= 80) return "Ouro";
  if (saldo <= 90) return "Diamante";
  if (saldo <= 100) return "Lendário";
  return "Imortal";
}

function listarCampeao() {
  for (let i = 0; i < campeoes.length; i++) {
    let selecao = campeoes[i];
    console.log(`seleção ${i} : ${selecao} `);
  }
}

console.log("------ Selecione seu Campeão ------ ");
listarCampeao();

console.log("---------------------");

let campeaoSelecionado;

while (!campeaoSelecionado) {
  let escolha = Number(prompt("Escolha seu Campeão pelo número: "));
  campeaoSelecionado = campeoes[escolha];

  if (!campeaoSelecionado) {
    console.log("Opção Inválida! Tente de novo.");
  }
}

console.log(`Você escolheu: ${campeaoSelecionado}`);

let vitorias = Number(prompt("Digite o número de vitórias: "));
let derrotas = Number(prompt("Digite o número de derrotas: "));

let calculo = vitorias - derrotas;
let resultado = calcularRank(calculo);

console.log(
  `O ${campeaoSelecionado} tem saldo de: ** ${calculo} ** e está no nível de ${resultado}`
);
