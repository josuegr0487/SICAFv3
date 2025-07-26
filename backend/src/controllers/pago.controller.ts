import { Request, Response } from 'express';
import { Pago } from '../models/pago.model';

export const obtenerTodos = async (req: Request, res: Response) => {
  const registros = await Pago.findAll();
  res.json(registros);
};

export const obtenerPorId = async (req: Request, res: Response) => {
  const registro = await Pago.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Pago no encontrado' });
  res.json(registro);
};

export const crear = async (req: Request, res: Response) => {
  const nuevo = await Pago.create(req.body);
  res.status(201).json(nuevo);
};

export const actualizar = async (req: Request, res: Response) => {
  const registro = await Pago.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Pago no encontrado' });
  await registro.update(req.body);
  res.json(registro);
};

export const eliminar = async (req: Request, res: Response) => {
  const registro = await Pago.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Pago no encontrado' });
  await registro.destroy();
  res.json({ msg: 'Pago eliminado' });
};