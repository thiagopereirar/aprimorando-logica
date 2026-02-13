const characterRepository = require("../database/character.repository");

const characterService = {
  getCharacter: (id) => {
    const character = characterRepository.findById(id);
    if (!character) throw new Error("Personagem não encontrado");
    return character;
  },

  getOptions: () => {
    return characterRepository.findAll();
  },

  calculateRank: (vitorias, derrotas) => {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (saldo < 10) nivel = "Ferro";
    else if (saldo <= 20) nivel = "Bronze";
    else if (saldo <= 50) nivel = "Prata";
    else if (saldo <= 80) nivel = "Ouro";
    else if (saldo <= 90) nivel = "Diamante";
    else if (saldo <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    return { saldo, nivel };
  },
};

module.exports = characterService;
