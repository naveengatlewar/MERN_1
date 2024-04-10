
// 1)  first we making connection with database with below code


const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/5000"

const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () => {

    try {
        await mongoose.connect(URI);
        console.log('connection successful to DB');
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);

    }
};

module.exports = connectDb;