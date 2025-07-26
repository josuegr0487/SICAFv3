import { Request, Response, NextFunction } from 'express';

export const manejarErrores = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ msg: 'Error interno del servidor' });
};