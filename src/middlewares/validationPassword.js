const validationPassword = (request, response, next) => {
  const passwrd = request.body.password;
  if (!passwrd) {
    return response.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  const passwdLengt = passwrd.length;
 
  if (passwdLengt < 6) {
    return response.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

module.exports = validationPassword;