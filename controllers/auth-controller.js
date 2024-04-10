
// 3) Now below code is for registration logic and handling and manipulating data.


const User = require("../models/user-model");
const bcrypt = require("bcrypt");


// Home page

const home = async (req, res) => {
    try {
        res.status(200).send("Welome to world best website");

    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }

};


// User Registration logic

//1. Get registration Data: retrieve user data (username, email, passoword).
//2. check Email existence : Check if te email is already registered.
//3. Hash Password: securely hast the password.
//4. Create User: Create a new user with hashed password.
//5. Save to DB: save user data to the database.
//6. Respond: Respond with "Registration Successful" or handle error.

const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExsist = await User.findOne({ email: email });

        if (userExsist) {
            return res.status(400).json({ msg: "email already exsist" });
        }

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password});

        res.status(201).json({ msg: "registration succesfull", token:await userCreated.generateToken(), userId: userCreated._id.toString(), });

    } catch (error) {
        res.status(500).json({ msg: "internal server error" });
    }
};

// In most cases, converting _id to a string is a good practie because ut ensure consistency and compatibility across different JWT libraries and systems. It also aligns with the expectation that claims in a JWT are represented as strings.

// User Login logic

const login = async (req, res) => {
    try {
        const {email, password } = req.body;

        const userExsist = await User.findOne({email});
        console.log(userExsist);


        if(!userExsist){
            return res.status(400).json({message: "Invalid credentials"});
        }

        // const user = await bcrypt.compare(password, userExsist.password);

        const user = await userExsist.comparePassword(password);

        if(user){
            res.status(200).json({ 
                msg: "Login succesfull", 
                token:await userExsist.generateToken(), userId: userExsist._id.toString(), 
            });

        }else{
            res.status(401).json({message: "Invalid email or password"});
        }
        
    } catch (error) {
        res.status(500).json("internal server error");
        
    }
}



module.exports = { home, register, login };