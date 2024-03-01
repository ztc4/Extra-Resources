const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const connectionString = "mongodb+srv://launchcode-dom:practice@launchcode-practice-dom.jdcargs.mongodb.net/?retryWrites=true&w=majority&appName=launchcode-practice-dom-form"
mongoose.connect(connectionString).then(()=>{console.log("Connected to the database")})