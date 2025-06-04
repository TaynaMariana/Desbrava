import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const visitas = await prisma.visita.findMany({
    include: { usuario: true, ponto: true }
  });
  res.json(visitas);
});

router.post('/', async (req, res) => {
  const { usuarioId, pontoId } = req.body;
  try {
    const visita = await prisma.visita.create({ data: { usuarioId, pontoId } });
    res.status(201).json(visita);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao registrar visita', detalhes: error });
  }
});

export default router;
