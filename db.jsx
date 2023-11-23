const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://niconomous:Niconomous120@cluster0.3is9kbp.mongodb.net//bookaroomiedb'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error' , () => {
    console.log('Mongo DB Connection failed')
})

connection.on('connected', () => {
    console.log('Mongo DB Connection successful')
})

module.exports = mongoose