import { Request, Response } from 'express';
import { MetodoPago } from '../models/metodopago.model';

export const obtenerTodos = async (req: Request, res: Response) => {
  const registros = await MetodoPago.findAll();
  res.json(registros);
};

export const obtenerPorId = async (req: Request, res: Response) => {
  const registro = await MetodoPago.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'MetodoPago no encontrado' });
  res.json(registro);
};

export const crear = async (req: Request, res: Response) => {
  const nuevo = await MetodoPago.create(req.body);
  res.status(201).json(nuevo);
};

export const actualizar = async (req: Request, res: Response) => {
  const registro = await MetodoPago.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'MetodoPago no encontrado' });
  await registro.update(req.body);
  res.json(registro);
};

export const eliminar = async (req: Request, res: Response) => {
  const registro = await MetodoPago.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'MetodoPago no encontrado' });
  await registro.destroy();
  res.json({ msg: 'MetodoPago eliminado' });
};