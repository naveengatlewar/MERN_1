// 1) we make contact-model in that create schema using mongoose 

const {Schema, model} = require("mongoose");

const contactSchema = new Schema({

    username: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

//creating  a model or a collection 
const Contact = new model("Contact", contactSchema);
module.exports = Contact;
