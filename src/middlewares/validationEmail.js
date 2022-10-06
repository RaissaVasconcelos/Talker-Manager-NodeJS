const validationEmail = (request, response, next) => {
  const regExp = /^\w+@\D+\.\D+$/;
  const { email } = request.body;

  if (!email) {
    return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  } 
  
  const validation = regExp.test(email);

  if (!validation) {
    return response.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  
  next(); 
};

module.exports = validationEmail;
