import { Request, Response } from 'express';
import { Configuracion } from '../models/configuracion.model';

export const obtenerTodos = async (req: Request, res: Response) => {
  const registros = await Configuracion.findAll();
  res.json(registros);
};

export const obtenerPorId = async (req: Request, res: Response) => {
  const registro = await Configuracion.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Configuracion no encontrado' });
  res.json(registro);
};

export const crear = async (req: Request, res: Response) => {
  const nuevo = await Configuracion.create(req.body);
  res.status(201).json(nuevo);
};

export const actualizar = async (req: Request, res: Response) => {
  const registro = await Configuracion.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Configuracion no encontrado' });
  await registro.update(req.body);
  res.json(registro);
};

export const eliminar = async (req: Request, res: Response) => {
  const registro = await Configuracion.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Configuracion no encontrado' });
  await registro.destroy();
  res.json({ msg: 'Configuracion eliminado' });
};