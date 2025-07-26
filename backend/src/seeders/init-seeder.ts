import bcrypt from 'bcryptjs';
import { sequelize } from '../config/db';
import { Empresa } from '../models/empresa.model';
import { Usuario } from '../models/usuario.model';

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Base de datos sincronizada');

    const empresa = await Empresa.create({ Nombre: 'Empresa Demo', RFC: 'DEM010101AAA' });
    const adminPassword = await bcrypt.hash('Admin123!', 10);

    await Usuario.create({
      EmpresaId: empresa.get('EmpresaId'),
      LocacionId: 1,
      Usuario: 'admin',
      Contraseña: adminPassword,
      Nombre: 'Administrador',
      Estatus: true
    });

    console.log('Datos de prueba insertados correctamente');
    process.exit();
  } catch (error) {
    console.error('Error en seeder:', error);
    process.exit(1);
  }
})();