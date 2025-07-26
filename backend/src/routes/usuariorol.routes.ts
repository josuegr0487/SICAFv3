import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/usuariorol.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuario-Roles
 *   description: Endpoints para gestionar usuario-roles
 */

/**
 * @swagger
 * /usuariorols:
 *   get:
 *     summary: Listar todos los usuario-roles
 *     tags: [Usuario-Roles]
 *     responses:
 *       200:
 *         description: Lista de usuario-roles
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /usuariorols/{id}:
 *   get:
 *     summary: Obtener un usuario-roles por ID
 *     tags: [Usuario-Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario-Roles encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /usuariorols:
 *   post:
 *     summary: Crear un usuario-roles
 *     tags: [Usuario-Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Usuario-Roles creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /usuariorols/{id}:
 *   put:
 *     summary: Actualizar un usuario-roles
 *     tags: [Usuario-Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario-Roles actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /usuariorols/{id}:
 *   delete:
 *     summary: Eliminar un usuario-roles
 *     tags: [Usuario-Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario-Roles eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;