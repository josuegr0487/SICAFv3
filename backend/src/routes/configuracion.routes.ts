import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/configuracion.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Configuraciones
 *   description: Endpoints para gestionar configuraciones
 */

/**
 * @swagger
 * /configuracions:
 *   get:
 *     summary: Listar todos los configuraciones
 *     tags: [Configuraciones]
 *     responses:
 *       200:
 *         description: Lista de configuraciones
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /configuracions/{id}:
 *   get:
 *     summary: Obtener un configuraciones por ID
 *     tags: [Configuraciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Configuraciones encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /configuracions:
 *   post:
 *     summary: Crear un configuraciones
 *     tags: [Configuraciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Configuraciones creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /configuracions/{id}:
 *   put:
 *     summary: Actualizar un configuraciones
 *     tags: [Configuraciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Configuraciones actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /configuracions/{id}:
 *   delete:
 *     summary: Eliminar un configuraciones
 *     tags: [Configuraciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Configuraciones eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;