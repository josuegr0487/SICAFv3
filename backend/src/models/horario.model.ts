import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Horario = sequelize.define('Horario', {
  HorarioId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  Nombre: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Horario', timestamps: false });