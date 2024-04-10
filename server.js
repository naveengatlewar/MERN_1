require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const app = express(); // empty argument passing data to app variable (we can handle middle ware mange and server create etc..)
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);


// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to my world");
// });


const PORT = 5000;

connectDb().then(() => {

    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});