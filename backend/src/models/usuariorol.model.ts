import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const UsuarioRol = sequelize.define('UsuarioRol', {
  UsuarioRolId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  UsuarioId: { type: DataTypes.INTEGER, allowNull: false },
  RolId: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'UsuarioRol', timestamps: false });