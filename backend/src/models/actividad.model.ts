import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Actividad = sequelize.define('Actividad', {
  ActividadId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  Nombre: DataTypes.STRING,
  Descripcion: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Actividad', timestamps: false });