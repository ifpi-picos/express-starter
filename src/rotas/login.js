import Express from 'express';
import Autenticacao from '../servicos/Autenticacao.js';

const router = Express.Router();
const autenticacao = new Autenticacao();

router.post('/', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const { token, usuario } = await autenticacao.login(email, senha);
    res.json({ token, usuario });
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

export default router;
