const port = 3003

const bodyParse = require('body-parser')
const express = require('express')
const server = express()
const firebase = require('../config/firebase')
const allowCors = require('./cors')

server.use(bodyParse.urlencoded({ extended: true }))
server.use(bodyParse.json())
server.use(allowCors)

server.get('/', (req, res) => {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('/tasks');
    let data = []

    usersRef.on("value", function (snap) {
        snap.forEach(e => {
            
            var values = e.val()
            values.key = e.key
            data.push({values})
        })
            res.json(data);
            usersRef.off("value");
        },
        function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            res.send("The read failed: " + errorObject.code);
        });
})

server.get('/:id', (req, res) => {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('tasks/' + req.params.id);

    usersRef.on("value", function (snapshot) {
            console.log()
            res.json(snapshot.val());
            usersRef.off("value");
        },
        function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            res.send("The read failed: " + errorObject.code);
        });
})

server.put('/:id', (req, res) => {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('tasks/' + req.params.id);
    alteracao = req.body

    usersRef.update(alteracao)
    usersRef.on("value", function (snapshot) {
        res.json(snapshot.val());
        usersRef.off("value");
    },
    function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
    });
    
})

server.post('/', (req, res) => {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('tasks');

    const novaTarefa = {
        ative: true,
        name : req.body.name
    }

    usersRef.push(novaTarefa)
    res.send(req.body.name)
})

server.delete('/:id', (req, res) => {
    const dbRef = firebase.database().ref();
    const usersRef = dbRef.child('tasks/' + req.params.id)    
    
    usersRef.remove()
    res.json({reseposta: "Usuário exluído."})
})


server.listen(port, () => {
    console.log('Server run on ' + port)
})