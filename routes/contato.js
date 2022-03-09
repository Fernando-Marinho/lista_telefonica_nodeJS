const router = require('express').Router();
const contatoController = require('../controllers/contato');

//GET => /contatos => Lista todos os contatos
router.get('/', contatoController.findAll)

//GET => /contatos/:id => Lista 1 contato
router.get('/:id', contatoController.findOne)

//POST => /contatos => Cria 1 contato
router.post('/', contatoController.create)

//PUT => /contatos/:id => Atualiza 1 contato
router.put('/:id', contatoController.update)

//DELETE => /contatos:/id => Deleta 1 contato
router.delete('/:id', contatoController.delete)

module.exports = router