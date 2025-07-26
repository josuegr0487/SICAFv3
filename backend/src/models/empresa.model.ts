import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Empresa = sequelize.define('Empresa', {
  EmpresaId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  Nombre: { type: DataTypes.STRING, allowNull: false },
  RFC: DataTypes.STRING,
  Direccion: DataTypes.STRING,
  Telefono: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true },
  FechaCreacion: DataTypes.DATE
}, { tableName: 'Empresa', timestamps: false });