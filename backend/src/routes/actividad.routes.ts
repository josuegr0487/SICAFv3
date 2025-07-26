import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/actividad.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Actividades
 *   description: Endpoints para gestionar actividades
 */

/**
 * @swagger
 * /actividads:
 *   get:
 *     summary: Listar todos los actividades
 *     tags: [Actividades]
 *     responses:
 *       200:
 *         description: Lista de actividades
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /actividads/{id}:
 *   get:
 *     summary: Obtener un actividades por ID
 *     tags: [Actividades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Actividades encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /actividads:
 *   post:
 *     summary: Crear un actividades
 *     tags: [Actividades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Actividades creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /actividads/{id}:
 *   put:
 *     summary: Actualizar un actividades
 *     tags: [Actividades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Actividades actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /actividads/{id}:
 *   delete:
 *     summary: Eliminar un actividades
 *     tags: [Actividades]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Actividades eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;