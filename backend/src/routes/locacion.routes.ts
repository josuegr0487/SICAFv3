import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/locacion.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Locaciones
 *   description: Endpoints para gestionar locaciones
 */

/**
 * @swagger
 * /locacions:
 *   get:
 *     summary: Listar todos los locaciones
 *     tags: [Locaciones]
 *     responses:
 *       200:
 *         description: Lista de locaciones
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /locacions/{id}:
 *   get:
 *     summary: Obtener un locaciones por ID
 *     tags: [Locaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Locaciones encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /locacions:
 *   post:
 *     summary: Crear un locaciones
 *     tags: [Locaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Locaciones creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /locacions/{id}:
 *   put:
 *     summary: Actualizar un locaciones
 *     tags: [Locaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Locaciones actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /locacions/{id}:
 *   delete:
 *     summary: Eliminar un locaciones
 *     tags: [Locaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Locaciones eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;