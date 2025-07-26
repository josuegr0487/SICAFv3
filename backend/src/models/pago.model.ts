import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Pago = sequelize.define('Pago', {
  PagoId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  VentaId: { type: DataTypes.INTEGER, allowNull: false },
  MetodoPagoId: { type: DataTypes.INTEGER, allowNull: false },
  Monto: DataTypes.DECIMAL,
  FechaPago: DataTypes.DATE,
  Referencia: DataTypes.STRING
}, { tableName: 'Pago', timestamps: false });