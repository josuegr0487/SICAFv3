import { app } from "./app";
import { sequelize } from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(async () => {
    console.log("✅ Conectado a SQL Server");
    await sequelize.sync(); // Sincroniza modelos con la base de datos
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  })
  .catch(console.error);
