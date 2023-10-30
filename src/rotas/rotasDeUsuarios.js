import { PrismaClient } from '@prisma/client';
import Express from 'express';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({});
  res.send(usuarios);
});

router.post('/', async (req, res) => {
  const usuario = req.body;
  await prisma.usuario.create({
    data: usuario,
  });
  res.status(201).send('Usuário salvo com sucesso!');
});

router.put('/:id', (req, res) => {
  res.send('Put usuário!');
});

router.delete('/:id', (req, res) => {
  res.send('Delete usuário!');
});

export default router;
