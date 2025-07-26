import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/ventadetalle.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Venta-Detalles
 *   description: Endpoints para gestionar venta-detalles
 */

/**
 * @swagger
 * /ventadetalles:
 *   get:
 *     summary: Listar todos los venta-detalles
 *     tags: [Venta-Detalles]
 *     responses:
 *       200:
 *         description: Lista de venta-detalles
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /ventadetalles/{id}:
 *   get:
 *     summary: Obtener un venta-detalles por ID
 *     tags: [Venta-Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venta-Detalles encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /ventadetalles:
 *   post:
 *     summary: Crear un venta-detalles
 *     tags: [Venta-Detalles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Venta-Detalles creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /ventadetalles/{id}:
 *   put:
 *     summary: Actualizar un venta-detalles
 *     tags: [Venta-Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venta-Detalles actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /ventadetalles/{id}:
 *   delete:
 *     summary: Eliminar un venta-detalles
 *     tags: [Venta-Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venta-Detalles eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;