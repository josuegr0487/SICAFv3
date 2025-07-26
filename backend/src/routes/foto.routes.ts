import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/foto.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Fotos
 *   description: Endpoints para gestionar fotos
 */

/**
 * @swagger
 * /fotos:
 *   get:
 *     summary: Listar todos los fotos
 *     tags: [Fotos]
 *     responses:
 *       200:
 *         description: Lista de fotos
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /fotos/{id}:
 *   get:
 *     summary: Obtener un fotos por ID
 *     tags: [Fotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fotos encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /fotos:
 *   post:
 *     summary: Crear un fotos
 *     tags: [Fotos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Fotos creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /fotos/{id}:
 *   put:
 *     summary: Actualizar un fotos
 *     tags: [Fotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fotos actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /fotos/{id}:
 *   delete:
 *     summary: Eliminar un fotos
 *     tags: [Fotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fotos eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;