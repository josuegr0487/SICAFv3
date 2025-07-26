import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Permiso = sequelize.define('Permiso', {
  PermisoId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  Nombre: DataTypes.STRING,
  Codigo: DataTypes.STRING,
  Descripcion: DataTypes.STRING
}, { tableName: 'Permiso', timestamps: false });