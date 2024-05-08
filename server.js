require("dotenv").config();
const express = require("express");
const authRoute = require("./router/auth-router");
const contactRoute = require('./router/contact-router');
const app = express(); // empty argument passing data to app variable (we can handle middleware manage and server create etc..)
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error_middleware");


app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

app.use(errorMiddleware);


// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to my world");
// });


const PORT = 5000;

connectDb().then(() => {

    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});