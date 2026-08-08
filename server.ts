import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini AI Client securely server-side
  let ai: GoogleGenAI | null = null;
  function getGenAI() {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY non configurée');
      }
      ai = new GoogleGenAI({ apiKey });
    }
    return ai;
  }

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', app: 'Le Manuel du Futur Millionnaire' });
  });

  // AI Counselor route: ask questions about the manuscript
  app.post('/api/gemini/ask-manuscript', async (req, res) => {
    try {
      const { question } = req.body;
      if (!question || typeof question !== 'string') {
        return res.status(400).json({ error: 'Question requise' });
      }

      const client = getGenAI();
      const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Tu es le Conseiller Éditiorial Officiel du "Manuel du Futur Millionnaire" publié par Millionaire Zone.
Ton ton est distingué, haut de gamme, stratégique, motivant et élégant.
L'utilisateur te pose une question sur le livre, l'indépendance financière, ou les principes de création d'actifs.
Réponds en français avec concision (2 à 4 paragraphes percutants), en mettant en valeur les principes de liberté financière, d'effet de levier et de création de valeur.

Question de l'utilisateur : "${question}"`
      });

      res.json({ answer: response.text });
    } catch (error: any) {
      console.error('Erreur API Gemini:', error);
      res.status(500).json({
        error: 'Impossible d\'obtenir une réponse pour le moment',
        details: error?.message || 'Erreur interne'
      });
    }
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur Le Manuel du Futur Millionnaire démarré sur le port ${PORT}`);
  });
}

startServer();
