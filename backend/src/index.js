const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()


//Conexão com o mongodb
mongoose.connect('mongodb+srv://BRENDA:322745@cluster0-w8byl.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)