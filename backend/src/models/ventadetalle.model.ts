import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const VentaDetalle = sequelize.define('VentaDetalle', {
  VentaDetalleId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  VentaId: { type: DataTypes.INTEGER, allowNull: false },
  FotoId: { type: DataTypes.INTEGER },
  Impresa: DataTypes.BOOLEAN,
  Digital: DataTypes.BOOLEAN
}, { tableName: 'VentaDetalle', timestamps: false });