import express from "express";
import cors from "cors";
import routesProducs from "./src/routes/products.routes.js";

const app = express();

app.use(cors());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

app.use((req, res, next) => {
  console.log(`Datos Recibidos: ${req.method} ${req.url}`);
  next();
});

app.use("/api", routesProducs);

app.use((req, res, next) => {
  res.status(404).json({
    error: "404 ruta no encontrada",
    mensaje: `el recurso ${req.url} no existe`,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
