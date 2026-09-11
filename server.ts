import express from "express";
import path from "path";

async function startServer() {
  const app = express();

  // Health check API route for Cloud Run
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const isProduction =
    process.env.NODE_ENV === "production" ||
    (typeof process.argv[1] === "string" && (process.argv[1].endsWith(".cjs") || process.argv[1].endsWith(".js")));

  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Cloud Run sets PORT (usually 8080), while local dev environment uses 3000
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });

  // If Cloud Run or container sets PORT to something other than 3000, also bind 3000 if available
  if (port !== 3000) {
    try {
      const devServer = app.listen(3000, "0.0.0.0", () => {
        console.log("Server also running on http://0.0.0.0:3000");
      });
      devServer.on("error", (err: any) => {
        // Port 3000 might already be bound or in use by another process
        if (err.code !== "EADDRINUSE") {
          console.warn("Could not bind port 3000:", err.message);
        }
      });
    } catch (_) {
      // Ignore if port 3000 already in use
    }
  }

  server.on("error", (err: any) => {
    console.error("Server error:", err);
  });
}

startServer();
