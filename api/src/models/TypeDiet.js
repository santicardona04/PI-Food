const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('typeDiet', {
    
    id:{
      type: DataTypes.UUID,        // este tipo de dato es para que no se repita con el de la API (234T324R23T)
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING ,
      // allowNull: false,
    }
    
  });
};
