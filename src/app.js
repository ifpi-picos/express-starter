import Express from 'express'; // importa o módulo do express
import logger from 'morgan';
import { primeiro, segundo } from './middlewares/main.js';
import rotasDeUsuarios from './rotas/rotasDeUsuarios.js';

// criar um instância/aplicação Express
const app = Express();

app.use(primeiro);
app.use(segundo);

app.use(logger('dev'));

app.use('/usuarios', rotasDeUsuarios);
app.use('/passageiros', rotasDeUsuarios);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
