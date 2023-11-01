const app = require('./app.js')

// Gives us access to our environment variable in .env
require("dotenv").config()
const PORT = process.env.PORT

// Listener
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})