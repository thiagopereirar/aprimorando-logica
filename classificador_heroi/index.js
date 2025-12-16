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

function calcularNivel(xp) {
  if (xp <= 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

function listarCampeao() {
  for (let i = 0; i < campeoes.length; i++) {
    let selecao = campeoes[i];
    console.log(`Seleção ${i}  : ${selecao}`);
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

console.log(`Você escolheu:   ${campeaoSelecionado}`);

console.log("----- Escolha o XP ----- ");
console.log("XP de 0 a 10001");

let xpCampeao = Number(prompt("Digite o xp do seu Campeão: "));
let nivel = calcularNivel(xpCampeao);

console.log("-----------------------------------------------------------");
console.log(
  `O seu Campeão é: ** ${campeaoSelecionado} ** e Está no nível: ** ${nivel} **`
);
console.log("-----------------------------------------------------------");
