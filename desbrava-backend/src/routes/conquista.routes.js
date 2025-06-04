import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const conquistas = await prisma.conquista.findMany({
    include: { usuario: true }
  });
  res.json(conquistas);
});

router.post('/', async (req, res) => {
  const { nome, usuarioId } = req.body;
  try {
    const conquista = await prisma.conquista.create({
      data: { nome, usuarioId }
    });
    res.status(201).json(conquista);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao registrar conquista', detalhes: error });
  }
});

export default router;
