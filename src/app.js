import Express from 'express'; // importa o módulo do express
import logger from 'morgan';
import rotasDeUsuarios from './rotas/rotasDeUsuarios.js';

// criar um instância/aplicação Express
const app = Express();
// middleware para converter os body da requisição para json
app.use(Express.json());
// app.use(primeiro);
// app.use(segundo);

app.use(logger('dev'));

app.use('/usuarios', rotasDeUsuarios);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
