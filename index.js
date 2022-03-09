const express = require('express');
const db = require('./database/mysql');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));

const contatosRouter = require('./routes/contato');
app.use('/contatos', contatosRouter)

db.sync()
    .then(() => app.listen(8000))
    .catch((err) => console.log(err));
