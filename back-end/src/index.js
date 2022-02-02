const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

require('./config/dbConfig');

// cors para fazer a ligação do front e back-end
app.use(cors());

//Express
app.use(express.json());

//para ligar as rotas/ 
app.use(routes);


// port do site
app.listen(3333);