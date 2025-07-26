import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

// Rutas
import authRoutes from "./routes/auth.routes";
import empresaRoutes from "./routes/empresa.routes";
import locacionRoutes from "./routes/locacion.routes";
import usuarioRoutes from "./routes/usuario.routes";
import rolRoutes from "./routes/rol.routes";
import permisoRoutes from "./routes/permiso.routes";
import usuarioRolRoutes from "./routes/usuariorol.routes";
import rolPermisoRoutes from "./routes/rolpermiso.routes";
import actividadRoutes from "./routes/actividad.routes";
import horarioRoutes from "./routes/horario.routes";
import fotoRoutes from "./routes/foto.routes";
import ventaRoutes from "./routes/venta.routes";
import ventaDetalleRoutes from "./routes/ventadetalle.routes";
import metodoPagoRoutes from "./routes/metodopago.routes";
import pagoRoutes from "./routes/pago.routes";
import configuracionRoutes from "./routes/configuracion.routes";

import { manejarErrores } from "./middlewares/error.middleware";

// Inicializar app
export const app = express();
app.use(cors());
app.use(express.json());

// Configuración de Swagger
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "API BD Local - Sistema de Fotos", version: "1.0.0" },
  },
  apis: ["./src/routes/*.ts"], // Busca anotaciones @swagger en las rutas
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas API
app.use("/api/auth", authRoutes);
app.use("/api/empresas", empresaRoutes);
app.use("/api/locaciones", locacionRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/roles", rolRoutes);
app.use("/api/permisos", permisoRoutes);
app.use("/api/usuario-roles", usuarioRolRoutes);
app.use("/api/rol-permisos", rolPermisoRoutes);
app.use("/api/actividades", actividadRoutes);
app.use("/api/horarios", horarioRoutes);
app.use("/api/fotos", fotoRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/venta-detalles", ventaDetalleRoutes);
app.use("/api/metodos-pago", metodoPagoRoutes);
app.use("/api/pagos", pagoRoutes);
app.use("/api/configuraciones", configuracionRoutes);

app.use(manejarErrores);
