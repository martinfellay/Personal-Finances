// const express = require('express');
// const app = express();
// const port= 3000;

// app.get('/', (_req, res) => {
//     res.send("hello world!")
// });

// app.listen(port, () => {
//     console.log(`ejemplo de escucha! at http://localhost:${port}`);
// })

// const fetch = require("node-fetch");
function loadList () {
    fetch('/Personal-Finances/assets/data/operations.json')
    .then(data => data.json())
    .then(data=> {
        drawTable (data);
    })
    console.log("me fije en la lista");
}

loadList()

function formDefaults () {
    document.getElementById("mail").defaultValue = "default@gmail.com";
    document.getElementById("message").defaultValue = "This app still sucks!";
}

formDefaults()

//CATCH DATA FROM 'FORM'S' INPUT. WRITE THE /JSON FILE
function formContactPrevent () {

    var formContact = document.getElementById("formContact");
    formContact.addEventListener('submit', (e) =>{
        e.preventDefault();

        var form = new FormData(formContact)
        var _mail = form.get('mail');
        var _message= form.get('message');
        console.log(_mail);
        console.log(_message);
        console.log(JSON.stringify(_mail));
        console.log(JSON.stringify(_message));

        fetch('/Personal-Finances/assets/data/form.json',
        {
            method:'post',
            body: _mail
        },
        )
        .then(res => res.text())
        .then(data => console.log(data))
        }
    )
    
}

formContactPrevent()

//INPUT NEW VALUE FOR LIST
var formList = document.getElementById("formList");
formList.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    var list = new FormData(formList)
    console.log(list.get('concept'));
    console.log(list.get('date'));
    console.log(list.get('type'));
    console.log(list.get('amount'));

    fetch('/Personal-Finances/assets/data/operations.json',{
        method:'POST'
    })
    .then(data => data.json())
    .then(data=> {
        console.log(JSON.stringify(data));
    })

    loadList()
})

//CLICK EVENT / READ VALUES FROM .JSON FILE
let addList = document.getElementById("addList");
addList.addEventListener('click', () => {
    loadList()
});

var row = document.getElementById("row");
function drawTable(data){
    row.innerHTML = ''
        for(let tableItem of data){
            row.innerHTML +=`
            <tr>
                <td>${tableItem['concept']}</td>
                <td>${tableItem['date']}</td>
                <td>${tableItem['type']}</td>
                <td>${tableItem['amount']}</td>
            </tr>
            `}
}

//BRING VALUES FROM JSON AND SUM
var allTotal=0
function sum () {
    fetch('/Personal-Finances/assets/data/operations.json')
.then(data => data.json())
.then(data => {
        for(let i of data){
            allTotal += i.amount;;
    }
    showTotal();
});
}

sum();

//BUTTON CALCULATE - SEND JSON AMOUNTS
const calculate = document.getElementById("calculate");
calculate.addEventListener('click', () => {
    loadList()
    sum()
    // showTotal();
});

//CHANGE HTML
const total = document.getElementById("total");
function showTotal (){
        total.innerHTML = `${allTotal}`;
}
