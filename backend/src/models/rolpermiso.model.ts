import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const RolPermiso = sequelize.define('RolPermiso', {
  RolPermisoId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  RolId: { type: DataTypes.INTEGER, allowNull: false },
  PermisoId: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'RolPermiso', timestamps: false });