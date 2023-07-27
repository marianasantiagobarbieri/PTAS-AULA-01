const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://ihixzvyg:p5LjSG72Z7neRmgw8xTBIMPEOLyDZs0n@silly.db.elephantsql.com/ihixzvyg",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    //FALTA CÓDIGO AQUI
     sequelize.authenticate();

    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Anteção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};