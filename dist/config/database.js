"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('postgres', 'postgres', 'password', {
  host: "",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    requiere: 30000,
    idle: 10000
  },
  logging: false //oculta los mensajes en console. ya lo hace morgan//

});
exports.sequelize = sequelize;