import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/usuario.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para gestionar usuarios
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Listar todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtener un usuarios por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuarios encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un usuarios
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Usuarios creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuarios
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuarios actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuarios
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuarios eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;