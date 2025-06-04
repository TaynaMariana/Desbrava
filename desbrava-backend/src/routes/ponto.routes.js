import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const pontos = await prisma.pontoTuristico.findMany();
  res.json(pontos);
});

router.post('/', async (req, res) => {
  const data = req.body;
  try {
    const ponto = await prisma.pontoTuristico.create({ data });
    res.status(201).json(ponto);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar ponto turístico', detalhes: error });
  }
});

export default router;
