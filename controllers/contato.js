const Contato = require('../models/contato');

//Lista todos os contatos
exports.findAll = async (req, res) => {
    const contatos = await Contato.findAll({
        order:[
            ['createdAt', 'DESC']
        ]
    });
    return res.status(200).json(contatos);
}

//Lista 1 contato
exports.findOne = async (req, res) => {
    const { id } = req.params;
    const contato = await Contato.findAll({
        where: {
            id: id
        }
    })

    if (!contato) {
        res.status(404).send({ message: 'Contato não encontrado' })
        return
    } else {
        return res.status(200).json(contato);
    }
}

//Cria 1 Contato
exports.create = async (req, res) => {
    const { telefone, nome, email, imagem } = req.body;
    const contato = { telefone, nome, email, imagem };
    const novoContato = await Contato.create(contato);
    return res.status(200).json(novoContato.dataValues);
}

//Atualiza 1 Contato
exports.update = async (req, res) => {
    const { id } = req.params;
    const { telefone, nome, email, imagem } = req.body;
    const contato = { telefone, nome, email, imagem };
    await Contato.update(contato, {
        where: {
            id: id
        }
    })

    return res.status(200).json(contato);
}

//Deleta 1 Contato
exports.delete = async (req, res) => {
    const { id } = req.params;
    await Contato.destroy({
        where: {
            id: id
        }
    })
    return res.json('Contato Deletado');
}