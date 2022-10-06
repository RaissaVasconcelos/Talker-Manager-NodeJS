const methods = require('../methods');

const validationId = async (request, response, next) => {
  const { id } = request.params;
  // [0, 1, 2, 3] array talkers -> id de cadastrados máx é 4 
  const talkers = (await methods.readTalker()).length;

  if (Number(id) < 1 || Number(id) > (talkers)) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
};

module.exports = validationId;