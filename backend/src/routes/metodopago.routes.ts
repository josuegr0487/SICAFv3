import { Router } from 'express';
import { obtenerTodos, obtenerPorId, crear, actualizar, eliminar } from '../controllers/metodopago.controller';
import { validarJWT } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Métodos de Pago
 *   description: Endpoints para gestionar métodos de pago
 */

/**
 * @swagger
 * /metodopagos:
 *   get:
 *     summary: Listar todos los métodos de pago
 *     tags: [Métodos de Pago]
 *     responses:
 *       200:
 *         description: Lista de métodos de pago
 */
router.get('/', validarJWT, obtenerTodos);

/**
 * @swagger
 * /metodopagos/{id}:
 *   get:
 *     summary: Obtener un métodos de pago por ID
 *     tags: [Métodos de Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Métodos de Pago encontrado
 *       404:
 *         description: No encontrado
 */
router.get('/:id', validarJWT, obtenerPorId);

/**
 * @swagger
 * /metodopagos:
 *   post:
 *     summary: Crear un métodos de pago
 *     tags: [Métodos de Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Métodos de Pago creado
 */
router.post('/', validarJWT, crear);

/**
 * @swagger
 * /metodopagos/{id}:
 *   put:
 *     summary: Actualizar un métodos de pago
 *     tags: [Métodos de Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Métodos de Pago actualizado
 */
router.put('/:id', validarJWT, actualizar);

/**
 * @swagger
 * /metodopagos/{id}:
 *   delete:
 *     summary: Eliminar un métodos de pago
 *     tags: [Métodos de Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Métodos de Pago eliminado
 *       404:
 *         description: No encontrado
 */
router.delete('/:id', validarJWT, eliminar);

export default router;