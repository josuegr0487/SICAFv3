import { Request, Response } from 'express';
import { Venta } from '../models/venta.model';

export const obtenerTodos = async (req: Request, res: Response) => {
  const registros = await Venta.findAll();
  res.json(registros);
};

export const obtenerPorId = async (req: Request, res: Response) => {
  const registro = await Venta.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Venta no encontrado' });
  res.json(registro);
};

export const crear = async (req: Request, res: Response) => {
  const nuevo = await Venta.create(req.body);
  res.status(201).json(nuevo);
};

export const actualizar = async (req: Request, res: Response) => {
  const registro = await Venta.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Venta no encontrado' });
  await registro.update(req.body);
  res.json(registro);
};

export const eliminar = async (req: Request, res: Response) => {
  const registro = await Venta.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Venta no encontrado' });
  await registro.destroy();
  res.json({ msg: 'Venta eliminado' });
};