const express = require("express");
const cors = require("cors");
const path = require("path");
const {
    getProjectsController,
    getProjectByIdController,
    addProjectsController,
} = require("./controllers");
const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

// Configuración para subir límite de respuesta
app.use(express.json({ limit: "25mb" }));
// Para evitar errores de diferente origen cuando se hace la petición
app.use(cors());

// Endpoints

// ENDPOINT PARA COGER LOS PROYECTOS
app.get("/api/projects", getProjectsController);
app.get("/api/project/:id", getProjectByIdController);
app.post("/api/project", addProjectsController);

// Ruta a los archivos estáticos del build
app.use(
    "/project-promo-55-module-3-team-1",
    express.static(path.join(__dirname, "..", "public")),
);
app.use(express.static(path.join(__dirname, "..", "public")));
// Cualquier ruta del frontend → index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
// Configuración para escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
