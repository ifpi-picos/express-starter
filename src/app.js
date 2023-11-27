import cors from 'cors';
import Express from 'express'; // importa o módulo do express
import logger from 'morgan';
import aut from './middlewares/aut.js';
import login from './rotas/login.js';
import rotasDeUsuarios from './rotas/rotasDeUsuarios.js';

// criar um instância/aplicação Express
const app = Express();
// middleware para converter os body da requisição para json
app.use(Express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/login', login);
app.use(aut); // middleware de autenticacao
//colocar abaixo todas as rotas privadas que precisam de autenticacao
app.use('/usuarios', rotasDeUsuarios);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
