import { Request, Response } from 'express';
import { Foto } from '../models/foto.model';

export const obtenerTodos = async (req: Request, res: Response) => {
  const registros = await Foto.findAll();
  res.json(registros);
};

export const obtenerPorId = async (req: Request, res: Response) => {
  const registro = await Foto.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Foto no encontrado' });
  res.json(registro);
};

export const crear = async (req: Request, res: Response) => {
  const nuevo = await Foto.create(req.body);
  res.status(201).json(nuevo);
};

export const actualizar = async (req: Request, res: Response) => {
  const registro = await Foto.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Foto no encontrado' });
  await registro.update(req.body);
  res.json(registro);
};

export const eliminar = async (req: Request, res: Response) => {
  const registro = await Foto.findByPk(req.params.id);
  if (!registro) return res.status(404).json({ msg: 'Foto no encontrado' });
  await registro.destroy();
  res.json({ msg: 'Foto eliminado' });
};