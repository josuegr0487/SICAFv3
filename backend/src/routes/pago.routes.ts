import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/pago.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: Endpoints para gestionar pagos
 */

/**
 * @swagger
 * /pagos:
 *   get:
 *     summary: Listar todos los pagos
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Lista de pagos
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /pagos/{id}:
 *   get:
 *     summary: Obtener un pagos por ID
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pagos encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /pagos:
 *   post:
 *     summary: Crear un pagos
 *     tags: [Pagos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Pagos creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /pagos/{id}:
 *   put:
 *     summary: Actualizar un pagos
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pagos actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /pagos/{id}:
 *   delete:
 *     summary: Eliminar un pagos
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pagos eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;