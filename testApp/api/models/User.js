/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: Sequelize.STRING(255)
  	},
    age: {
    	type: Sequelize.INTEGER
    }    
  },
  associations: function () {
  	User.hasMany(Image, {
      as: 'images', 
      foreignKey: 'owner'
    });
  },
  options: {
    freezeTableName: false,
    tableName: 'user',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};

