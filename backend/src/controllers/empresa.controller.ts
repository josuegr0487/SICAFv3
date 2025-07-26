import { Request, Response } from 'express';
import { Empresa } from '../models/empresa.model';

export const obtenerEmpresas = async (req: Request, res: Response) => {
  const empresas = await Empresa.findAll();
  res.json(empresas);
};

export const obtenerEmpresa = async (req: Request, res: Response) => {
  const empresa = await Empresa.findByPk(req.params.id);
  if (!empresa) return res.status(404).json({ msg: 'Empresa no encontrada' });
  res.json(empresa);
};

export const crearEmpresa = async (req: Request, res: Response) => {
  const nueva = await Empresa.create(req.body);
  res.status(201).json(nueva);
};

export const actualizarEmpresa = async (req: Request, res: Response) => {
  const empresa = await Empresa.findByPk(req.params.id);
  if (!empresa) return res.status(404).json({ msg: 'Empresa no encontrada' });
  await empresa.update(req.body);
  res.json(empresa);
};

export const eliminarEmpresa = async (req: Request, res: Response) => {
  const empresa = await Empresa.findByPk(req.params.id);
  if (!empresa) return res.status(404).json({ msg: 'Empresa no encontrada' });
  await empresa.destroy();
  res.json({ msg: 'Empresa eliminada' });
};