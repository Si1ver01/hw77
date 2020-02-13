const fs = require("fs");
const PATH = "./dataBase/BD.txt";

const readBD = () => {
  const bd = fs.readFileSync(PATH).toString();
  if (bd.length) {
    return JSON.parse(bd);
  }
  return [];
};

const writeBD = data =>
  fs.writeFileSync(PATH, JSON.stringify([...readBD(), data], null, 2));

module.exports = { readBD, writeBD };
