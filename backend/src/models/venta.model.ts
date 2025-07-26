import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Venta = sequelize.define('Venta', {
  VentaId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  Codigo: DataTypes.STRING,
  NombreCliente: DataTypes.STRING,
  ApellidoPaternoCliente: DataTypes.STRING,
  ApellidoMaternoCliente: DataTypes.STRING,
  CorreoCliente: DataTypes.STRING,
  FechaVenta: DataTypes.DATE,
  FechaEntrega: DataTypes.DATE,
  Total: DataTypes.DECIMAL,
  Pagado: DataTypes.BOOLEAN,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true },
  UsuarioId: { type: DataTypes.INTEGER }
}, { tableName: 'Venta', timestamps: false });