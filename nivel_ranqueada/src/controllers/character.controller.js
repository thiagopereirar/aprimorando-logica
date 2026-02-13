const prompt = require("prompt-sync")();
const characterService = require("../service/character.service");

function initGame() {
  console.log("=========================================");
  console.log("          SELEÇÃO DE CAMPEÔES           ");
  console.log("=========================================");
  const champions = characterService.getOptions();
  champions.forEach((name, i) => console.log(`Seleção ${i}: ${name}`));
  console.log("-------------------------------------------");

  let champion;
  while (!champion) {
    try {
      let input = prompt("Escolha pelo número: ");
      if (input.trim() === "") continue;

      let choose = Number(input);
      champion = characterService.getCharacter(choose);
    } catch (error) {
      console.log(`${error.message}. Tente novamente `);
    }
  }
  console.log(`Você selecionou: ${champion.toUpperCase()}`);
  console.log("--------------------------------------------\n");
  const v = Number(prompt("Vitorias: "));
  const d = Number(prompt("Derrotas: "));

  const { saldo, nivel } = characterService.calculateRank(v, d);
  console.log("===========================================");
  console.log("              RESULTADO FINAL               ");
  console.log("===========================================");
  console.log(`Personagem: ${champion}`);
  console.log(`Saldo de Vitórias: ${saldo}`);
  console.log(`Nível Ranqueado: ${nivel}`);
  console.log("===========================================");
}

module.exports = { initGame };
