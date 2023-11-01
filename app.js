// Import express and initialize an instance of the express server
const express = require('express')
const app = express()
const colorsController = require('./controllers/colorsController')

// Import cors - prevents errors
const cors =require('cors')

//Middleware
app.use(cors())
app.use(express.json())
app.use("/colors", colorsController)


app.get('/', (req, res)=>{
    res.send('Welcom to the Colors App!')
})



module.exports = app