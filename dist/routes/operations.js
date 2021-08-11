"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _operacion = require("../controllers/operacion.controller");

var router = (0, _express.Router)();
//for many interaction with /api/operations/ , js access to this
router.get('/', _operacion.getOperation);
router.post('/', _operacion.createOperation);
router["delete"]('/:id', _operacion.deleteOperation);
router.get('/d', _operacion.deleteAllOperation); //get all the amount types on mi /API/operations/

router.get('/total', _operacion.getAllAmount);
var _default = router;
exports["default"] = _default;