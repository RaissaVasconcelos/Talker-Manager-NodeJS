const validationAuthorization = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization === 'undefined') {
    return response.status(401).json({ message: 'Token inválido' });
  }

  if (authorization.length !== 16) {
    return response.status(401).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = validationAuthorization;
