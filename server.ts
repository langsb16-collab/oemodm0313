import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Matching API
  app.post("/api/ai/match", (req, res) => {
    const { product, factories } = req.body;
    // Simple score calculation based on user request logic
    const matches = factories.map((f: any) => {
      let score = 0;
      if (product.material && f.materials?.includes(product.material)) score += 30;
      if (product.process && f.processes?.includes(product.process)) score += 30;
      if (f.rating > 4) score += 20;
      if (f.capacity > (product.quantity || 0)) score += 20;
      return { factoryId: f.id, score, reason: `Matches ${score}% of requirements` };
    }).sort((a: any, b: any) => b.score - a.score);

    res.json({ matches });
  });

  // Translation API (Mock)
  app.post("/api/translate", (req, res) => {
    const { text, lang } = req.body;
    res.json({ translatedText: `[${lang}] ${text}` });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
