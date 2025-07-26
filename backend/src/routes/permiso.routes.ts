import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/permiso.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Permisos
 *   description: Endpoints para gestionar permisos
 */

/**
 * @swagger
 * /permisos:
 *   get:
 *     summary: Listar todos los permisos
 *     tags: [Permisos]
 *     responses:
 *       200:
 *         description: Lista de permisos
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /permisos/{id}:
 *   get:
 *     summary: Obtener un permisos por ID
 *     tags: [Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Permisos encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /permisos:
 *   post:
 *     summary: Crear un permisos
 *     tags: [Permisos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Permisos creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /permisos/{id}:
 *   put:
 *     summary: Actualizar un permisos
 *     tags: [Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Permisos actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /permisos/{id}:
 *   delete:
 *     summary: Eliminar un permisos
 *     tags: [Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Permisos eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;