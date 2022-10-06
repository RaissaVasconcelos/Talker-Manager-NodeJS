const fs = require('fs').promises;

const fileJson = 'talker.json';
const { join } = require('path');

// função pra ler o arquivo json
const readTalker = async () => {
  const file = await fs.readFile(join(__dirname, fileJson), 'utf-8');
  return JSON.parse(file);
};

// função para modificar o arquivo json
const writeTalker = async (file) => {
  await fs.writeFile(join(__dirname, fileJson), JSON.stringify(file));
};

// função para retornar a pessoa pelo Id
const talkersId = async (id) => {
  const file = await readTalker();
  const talkerId = file.findIndex((elem) => elem.id === Number(id));
  return file[talkerId];
};

// função para adicionar uma nova pessoa
const addNewTalker = async ({ name, age, talk }) => {
  const file = await readTalker();
  const id = file.length + 1;
  const newTalker = {
      id,
      name,
      age,
      talk,
    };
  file.push(newTalker);
  await writeTalker(file);
  return newTalker;
};

// função para editar pessoa cadastrada
const editedTalker = async (id, talker) => {
  const file = await readTalker();
  const index = file.findIndex((elem) => elem.id === id);
  file[index] = talker;
  await writeTalker(file);
};

// função para deletar
const deletedTalker = async (id) => {
  const file = await readTalker();
  const newFile = file.filter((elem) => elem.id !== Number(id));
  await writeTalker(newFile);
};

module.exports = {
  readTalker,
  talkersId,
  addNewTalker,
  editedTalker,
  deletedTalker,
};
