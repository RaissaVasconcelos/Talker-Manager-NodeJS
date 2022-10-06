const validationTalk = (request, response, next) => {
  const { talk } = request.body;
  return (!talk) 
    ? response.status(400).json({ message: 'O campo "talk" é obrigatório' })
    : next();
};

module.exports = validationTalk;
