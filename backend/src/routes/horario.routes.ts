import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/horario.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Horarios
 *   description: Endpoints para gestionar horarios
 */

/**
 * @swagger
 * /horarios:
 *   get:
 *     summary: Listar todos los horarios
 *     tags: [Horarios]
 *     responses:
 *       200:
 *         description: Lista de horarios
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /horarios/{id}:
 *   get:
 *     summary: Obtener un horarios por ID
 *     tags: [Horarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Horarios encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /horarios:
 *   post:
 *     summary: Crear un horarios
 *     tags: [Horarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Horarios creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /horarios/{id}:
 *   put:
 *     summary: Actualizar un horarios
 *     tags: [Horarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Horarios actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /horarios/{id}:
 *   delete:
 *     summary: Eliminar un horarios
 *     tags: [Horarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Horarios eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;