import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Foto = sequelize.define('Foto', {
  FotoId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  ActividadId: { type: DataTypes.INTEGER, allowNull: false },
  HorarioId: { type: DataTypes.INTEGER },
  UsuarioId: { type: DataTypes.INTEGER },
  Nombre: DataTypes.STRING,
  RutaArchivo: DataTypes.STRING,
  RutaMiniatura: DataTypes.STRING,
  FechaCarga: DataTypes.DATE,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Foto', timestamps: false });