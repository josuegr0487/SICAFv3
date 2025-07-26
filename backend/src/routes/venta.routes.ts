import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/venta.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Endpoints para gestionar ventas
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Listar todos los ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener un ventas por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ventas encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crear un ventas
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Ventas creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /ventas/{id}:
 *   put:
 *     summary: Actualizar un ventas
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ventas actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /ventas/{id}:
 *   delete:
 *     summary: Eliminar un ventas
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ventas eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;