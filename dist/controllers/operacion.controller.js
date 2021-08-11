"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperation = getOperation;
exports.createOperation = createOperation;
exports.deleteOperation = deleteOperation;
exports.deleteAllOperation = deleteAllOperation;
exports.getAllAmount = getAllAmount;

var _operation = _interopRequireDefault(require("../models/operation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Request All The Data
function getOperation(_x, _x2) {
  return _getOperation.apply(this, arguments);
} //Write Operation Item


function _getOperation() {
  _getOperation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _operations;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _operation["default"].findAll();

          case 3:
            _operations = _context.sent;
            res.json({
              data: _operations
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              message: 'OPS! Something went wrong :_',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getOperation.apply(this, arguments);
}

function createOperation(_x3, _x4) {
  return _createOperation.apply(this, arguments);
} //Delete Operation Item


function _createOperation() {
  _createOperation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id, concept, operationdate, amounttype, amount, newConcept;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, concept = _req$body.concept, operationdate = _req$body.operationdate, amounttype = _req$body.amounttype, amount = _req$body.amount;
            _context2.prev = 1;
            _context2.next = 4;
            return _operation["default"].create({
              id: id,
              concept: concept,
              operationdate: operationdate,
              amounttype: amounttype,
              amount: amount
            }, {
              //voy a pasarte los siguientes datos
              fields: ['id', 'concept', 'operationdate', 'amounttype', 'amount']
            });

          case 4:
            newConcept = _context2.sent;

            if (!newConcept) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'New concept created successfully',
              data: newConcept
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).json({
              error: 'something went wrong :/'
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createOperation.apply(this, arguments);
}

function deleteOperation(_x5, _x6) {
  return _deleteOperation.apply(this, arguments);
} //Delete All Operation Item


function _deleteOperation() {
  _deleteOperation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _operation["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context3.sent;
            res.json({
              message: 'Item deleted',
              count: deleteRowCount
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              error: 'Something went wrong :/'
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _deleteOperation.apply(this, arguments);
}

function deleteAllOperation(_x7, _x8) {
  return _deleteAllOperation.apply(this, arguments);
} //Get All amount And Sum Them


function _deleteAllOperation() {
  _deleteAllOperation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var allDeletes;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _operation["default"].destroy(operations);

          case 3:
            allDeletes = _context4.sent;
            res.json(allDeletes);
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(500).json({
              error: 'Something went wrong :/'
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _deleteAllOperation.apply(this, arguments);
}

function getAllAmount(_x9, _x10) {
  return _getAllAmount.apply(this, arguments);
}

function _getAllAmount() {
  _getAllAmount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var calculateTotal;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _operation["default"].sum('amount');

          case 3:
            calculateTotal = _context5.sent;
            console.log(calculateTotal);

            if (calculateTotal) {
              res.json({
                message: 'Este es el total',
                data: calculateTotal
              });
            }

            _context5.next = 13;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.json({
              message: 'OPS! Something went wrong :_'
            });
            return _context5.abrupt("return", res.status(500).json({
              error: 'something went wrong :/'
            }));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _getAllAmount.apply(this, arguments);
}