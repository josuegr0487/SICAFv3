import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Configuracion = sequelize.define('Configuracion', {
  ConfiguracionId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  Nombre: DataTypes.STRING,
  Valor: DataTypes.STRING,
  Descripcion: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Configuracion', timestamps: false });