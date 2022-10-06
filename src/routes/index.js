const express = require('express');
const crypto = require('crypto');

const route = express.Router();

// constante status
const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_OK_NO_CONTENT = 204;

// middlewares
const validationEmail = require('../middlewares/validationEmail');
const validationPassword = require('../middlewares/validationPassword');
const validationName = require('../middlewares/validationName');
const validationAge = require('../middlewares/validationAge');
const validationTalk = require('../middlewares/validationTalk');
const validationwatchedAt = require('../middlewares/validationwatchedAt');
const validationRate = require('../middlewares/validationRate');
const validationAuthorization = require('../middlewares/validationAuthorization');
const validationId = require('../middlewares/validationId');

// metodos
const methods = require('../methods');

/* ---------------------------- rotas ------------------------------------------------ */ 

// cadastro de usuários com email e senha
route.post('/login', validationEmail, validationPassword, async (_request, response) => {
  const token = crypto.randomBytes(8).toString('hex');
  response.status(HTTP_OK_STATUS).json({ token });
});

// trás todos os usuários salvos
route.get('/talker', async (_request, response) => {
  const talker = await methods.readTalker();
  return response.status(HTTP_OK_STATUS).json(talker);
});

// cria um novo usuario
route.post('/talker',
  validationAuthorization,
  validationName,
  validationAge,
  validationTalk,
  validationwatchedAt,
  validationRate,
  async (request, response) => {
  const newTalker = { ...request.body };
  const talker = await methods.addNewTalker(newTalker);
  return response.status(HTTP_CREATED_STATUS).json(talker);
});

// trás usuário por parametro url
route.get('/talker/search', validationAuthorization, async (request, response) => {
  const url = request.query;
  const search = Object.values(url);
  const talker = await methods.readTalker();
  const searchTalker = talker.filter(({ name }) => name.includes(search));
  response.status(200).json(searchTalker);
});

// busca usuário pelo id
route.get('/talker/:id', validationId, async (request, response) => {
  const { id } = request.params;
  const talkerId = await methods.talkersId(id);
  return response.status(HTTP_OK_STATUS).json(talkerId);
});

// edita usuário
route.put('/talker/:id',
  validationId,
  validationAuthorization,
  validationName,
  validationAge,
  validationTalk,
  validationwatchedAt,
  validationRate,
  async (request, response) => {
  const { id } = request.params;
  const newTalker = { ...request.body, id: Number(id) };
  await methods.editedTalker(Number(id), newTalker);
  return response.status(HTTP_OK_STATUS).json(newTalker);
});

// exclui usuário
route.delete('/talker/:id', validationId, validationAuthorization, async (request, response) => {
  const { id } = request.params;
  await methods.deletedTalker(id);
  return response.status(HTTP_OK_NO_CONTENT).end();
});

module.exports = route;
