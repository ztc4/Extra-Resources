// Import necessary modules
const express = require('express');
const cors = require("cors")
const serverless = require("serverless-http")

// Set up the database
require("./db/mongoose")
const Message = require("./Models/message")

// Create an Express app
const app = express();
const port = 3000;


// Start the Server up
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// }); starting server if offline

app.use(cors())// allow access from different IPS
app.use(express.json())

app.post('/submit_message', async (req, res) => {
  
    try{
        const { name, email, message } = req.body // get input values
        const newMessage = new Message({
            name,
            email,
            message,
        });
        newMessage.save()
        .then(() => {
            res.status(201).send('Message submitted successfully');
        })
        .catch((error) => {
            console.error('Error saving message:', error);
            res.status(500).send({message:'Internal Server Error'});
        });

    }
    catch(e){
        res.status(500).send({message:"ran into a error",eror:e.toString()})

    }

});

app.get("/get_all_messages",async (req,res)=>{
    try{
        const message = await Message.find()
        res.status(200).json(message)
    }
    catch(e){
        res.status(500).send("Trouble getting the data")
    }
    
})

module.exports.handler = serverless(app);