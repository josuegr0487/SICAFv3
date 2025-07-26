import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Usuario } from "../models/usuario.model";

export const login = async (req: Request, res: Response) => {
  const { Usuario: usuario, Contraseña } = req.body;
  const user = await Usuario.findOne({ where: { Usuario: usuario } });
  if (!user) return res.status(400).json({ msg: "Usuario o contraseña incorrectos" });

  const match = await bcrypt.compare(Contraseña, user.get("Contraseña") as string);
  if (!match) return res.status(400).json({ msg: "Usuario o contraseña incorrectos" });

  const token = jwt.sign({ id: user.get("UsuarioId"), usuario }, process.env.JWT_SECRET!, { expiresIn: "8h" });
  res.json({ token });
};
