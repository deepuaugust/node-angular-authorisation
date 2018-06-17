var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express();

var User = require('./models/Users.js')

var posts = [
    {message:'ABC'},
    {message:'EDF'},
    {message:'GHI'}
]

app.use(cors())

app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/register', (req, res) => {
    var userData = req.body
    var user = new User(userData)

    user.save((err,result)=>{
        if(err)
            console.log('saving user error')
        res.sendStatus(200)
    })
})

mongoose.connect('mongodb://test:helloworld93@ds163630.mlab.com:63630/pssocialdeeps',{useMongoClient:true},(err)=>{
    if(!err)
        console.log('connected to mongo')
})

app.listen(3000)