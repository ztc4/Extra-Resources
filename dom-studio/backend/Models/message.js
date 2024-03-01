// Import Mongoose
const mongoose = require('mongoose');

// Define the schema
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
const Message = mongoose.model('Message', messageSchema);

// Export the model
module.exports = Message;