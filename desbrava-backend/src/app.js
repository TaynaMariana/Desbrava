import express from 'express';
import cors from 'cors';

import usuarioRoutes from './routes/usuario.routes.js';
import pontoRoutes from './routes/ponto.routes.js';
import feedbackRoutes from './routes/feedback.routes.js';
import visitaRoutes from './routes/visita.routes.js';
import conquistaRoutes from './routes/conquista.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/pontos', pontoRoutes);
app.use('/feedbacks', feedbackRoutes);
app.use('/visitas', visitaRoutes);
app.use('/conquistas', conquistaRoutes);

export default app;