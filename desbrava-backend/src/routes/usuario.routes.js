import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const { nome, email, foto } = req.body;
  try {
    const usuario = await prisma.usuario.create({ data: { nome, email, foto } });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: error });
  }
});

export default router;
