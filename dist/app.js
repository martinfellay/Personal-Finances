"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _operations = _interopRequireDefault(require("./routes/operations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// initializations
var app = (0, _express["default"])(); //Middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //importing routes

//routes
app.use('/api/operations', _operations["default"]); // function loadList () {
//     fetch('/')
//     .then(data => data.json())
//     .then(data => {
//         drawTable (data);
//     })
//     console.log("me fije en la lista");
// }
// loadList()
// function formDefaults () {
//     document.getElementById("mail").defaultValue = "default@gmail.com";
//     document.getElementById("message").defaultValue = "This app still sucks!";
// }
// formDefaults()
// //CATCH DATA FROM 'FORM'S' INPUT. WRITE THE /JSON FILE
// function formContactPrevent () {
//     var formContact = document.getElementById("formContact");
//     formContact.addEventListener('submit', (e) =>{
//         e.preventDefault();
//         var form = new FormData(formContact)
//         var _mail = form.get('mail');
//         var _message= form.get('message');
//         console.log(_mail);
//         console.log(_message);
//         console.log(JSON.stringify(_mail));
//         console.log(JSON.stringify(_message));
//         fetch('../data/form.json',
//         {
//             method:'post',
//             body: _mail
//         },
//         )
//         .then(res => res.text())
//         .then(data => console.log(data))
//         }
//     )
// }
// formContactPrevent()
// //INPUT NEW VALUE FOR LIST
// var formList = document.getElementById("formList");
// formList.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     var list = new FormData(formList)
//     console.log(list.get('concept'));
//     console.log(list.get('date'));
//     console.log(list.get('type'));
//     console.log(list.get('amount'));
//     fetch('../data/operations.json',{
//         method:'POST'
//     })
//     .then(data => data.json())
//     .then(data=> {
//         console.log(JSON.stringify(data));
//     })
//     loadList()
// })
// //CLICK EVENT / READ VALUES FROM .JSON FILE
// let addList = document.getElementById("addList");
// addList.addEventListener('click', () => {
//     loadList()
// });
// var row = document.getElementById("row");
// function drawTable(data){
//     row.innerHTML = ''
//         for(let tableItem of data){
//             row.innerHTML +=`
//             <tr>
//                 <td>${tableItem['concept']}</td>
//                 <td>${tableItem['date']}</td>
//                 <td>${tableItem['type']}</td>
//                 <td>${tableItem['amount']}</td>
//             </tr>
//             `}
// }
// //BRING VALUES FROM JSON AND SUM
// var allTotal=0
// function sum () {
//     fetch('../data/operations.json')
//     .then(data => data.json())
//     .then(data => {
//         for(let i of data){
//             allTotal += i.amount;
//     }
//     showTotal();
// });
// }
// sum();
// //BUTTON CALCULATE - SEND JSON AMOUNTS
// const calculate = document.getElementById("calculate");
// calculate.addEventListener('click', () => {
//     loadList()
//     sum()
//     // showTotal();
// });
// //CHANGE HTML
// const total = document.getElementById("total");
// function showTotal (){
//         total.innerHTML = `${allTotal}`;
// }

var _default = app;
exports["default"] = _default;