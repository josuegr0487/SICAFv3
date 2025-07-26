import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Rol = sequelize.define('Rol', {
  RolId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  Nombre: DataTypes.STRING,
  Descripcion: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Rol', timestamps: false });