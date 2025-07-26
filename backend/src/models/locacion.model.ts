import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Locacion = sequelize.define('Locacion', {
  LocacionId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  Nombre: DataTypes.STRING,
  Direccion: DataTypes.STRING,
  Telefono: DataTypes.STRING,
  ZonaHoraria: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Locacion', timestamps: false });