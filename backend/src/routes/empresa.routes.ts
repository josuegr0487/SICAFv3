import { Router } from "express";
import { obtenerEmpresas, obtenerEmpresa, crearEmpresa, actualizarEmpresa, eliminarEmpresa } from "../controllers/empresa.controller";
import { validarJWT } from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Empresas
 *   description: Endpoints para gestionar empresas
 */

/**
 * @swagger
 * /empresas:
 *   get:
 *     summary: Listar todos los empresas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: Lista de empresas
 */
router.get("/", validarJWT, obtenerEmpresas);

/**
 * @swagger
 * /empresas/{id}:
 *   get:
 *     summary: Obtener un empresas por ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empresas encontrado
 *       404:
 *         description: No encontrado
 */
router.get("/:id", validarJWT, obtenerEmpresa);

/**
 * @swagger
 * /empresas:
 *   post:
 *     summary: Crear un empresas
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Empresas creado
 */
router.post("/", validarJWT, crearEmpresa);

/**
 * @swagger
 * /empresas/{id}:
 *   put:
 *     summary: Actualizar un empresas
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empresas actualizado
 */
router.put("/:id", validarJWT, actualizarEmpresa);

/**
 * @swagger
 * /empresas/{id}:
 *   delete:
 *     summary: Eliminar un empresas
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Empresas eliminado
 *       404:
 *         description: No encontrado
 */
router.delete("/:id", validarJWT, eliminarEmpresa);

export default router;
