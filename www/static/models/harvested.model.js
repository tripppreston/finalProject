module.exports = (sequelize, Sequelize) => {
    const Harvested = sequelize.define("Harvested", {
      harvestedType: Sequelize.STRING,
      
      harvestedName: Sequelize.STRING,
      
      harvestedArea: Sequelize.STRING,
    
      harvestedPlanet: Sequelize.STRING,
    
      harvestedSize: Sequelize.STRING,
    
      harvestedFood: Sequelize.STRING
      }, {
        freezeTableName: true
      
      
    });
  
    return Harvested;
  };