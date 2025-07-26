import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/rolpermiso.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Rol-Permisos
 *   description: Endpoints para gestionar rol-permisos
 */

/**
 * @swagger
 * /rolpermisos:
 *   get:
 *     summary: Listar todos los rol-permisos
 *     tags: [Rol-Permisos]
 *     responses:
 *       200:
 *         description: Lista de rol-permisos
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /rolpermisos/{id}:
 *   get:
 *     summary: Obtener un rol-permisos por ID
 *     tags: [Rol-Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rol-Permisos encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /rolpermisos:
 *   post:
 *     summary: Crear un rol-permisos
 *     tags: [Rol-Permisos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Rol-Permisos creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /rolpermisos/{id}:
 *   put:
 *     summary: Actualizar un rol-permisos
 *     tags: [Rol-Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rol-Permisos actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /rolpermisos/{id}:
 *   delete:
 *     summary: Eliminar un rol-permisos
 *     tags: [Rol-Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rol-Permisos eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;