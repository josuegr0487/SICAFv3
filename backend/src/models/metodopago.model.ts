import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const MetodoPago = sequelize.define('MetodoPago', {
  MetodoPagoId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  Clave: DataTypes.STRING,
  Nombre: DataTypes.STRING,
  Descripcion: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'MetodoPago', timestamps: false });