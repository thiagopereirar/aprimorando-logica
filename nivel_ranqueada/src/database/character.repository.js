const characters = require("./character");

const characterRepository = {
  findAll: () => {
    return characters;
  },

  findById: (id) => {
    return characters[id];
  },
};

module.exports = characterRepository;
