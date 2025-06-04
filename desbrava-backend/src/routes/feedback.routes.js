import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const feedbacks = await prisma.feedback.findMany({
    include: { usuario: true, ponto: true }
  });
  res.json(feedbacks);
});

router.post('/', async (req, res) => {
  const { texto, estrelas, tipo, usuarioId, pontoId } = req.body;
  try {
    const feedback = await prisma.feedback.create({
      data: { texto, estrelas, tipo, usuarioId, pontoId }
    });
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao registrar feedback', detalhes: error });
  }
});

export default router;
