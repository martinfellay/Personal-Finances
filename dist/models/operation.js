"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../config/database");

//definir el modelo de la bd (name: 'operations')
var Concept = _database.sequelize.define('operations', {
  // id:{
  //     type: Sequelize.INTEGER,
  //     primaryKey: true
  // },
  concept: {
    type: _sequelize.Sequelize.TEXT
  },
  operationdate: {
    type: _sequelize.Sequelize.DATE
  },
  amounttype: {
    type: _sequelize.Sequelize.TEXT
  },
  amount: {
    type: _sequelize.Sequelize.INTEGER
  }
}, {
  timestamps: false // avoid troubbles with dates //

});

var _default = Concept;
exports["default"] = _default;