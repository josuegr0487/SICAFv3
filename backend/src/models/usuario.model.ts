import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

export const Usuario = sequelize.define('Usuario', {
  UsuarioId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  EmpresaId: { type: DataTypes.INTEGER, allowNull: false },
  LocacionId: { type: DataTypes.INTEGER, allowNull: false },
  Usuario: { type: DataTypes.STRING, unique: true },
  Contraseña: DataTypes.STRING,
  Nombre: DataTypes.STRING,
  ApellidoPaterno: DataTypes.STRING,
  ApellidoMaterno: DataTypes.STRING,
  Correo: DataTypes.STRING,
  Estatus: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { tableName: 'Usuario', timestamps: false });