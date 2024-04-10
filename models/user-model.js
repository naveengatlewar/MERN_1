
// 2) Second we make schema which data we want to add while registration except this data other we can not accept. Model


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

});


// secure the password with the bcrypt

userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {
        
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);

        user.password = hash_password;

    } catch (error) {
        next(error)

    }
});


//compare the passwords

userSchema.methods.comparePassword = async function(password){
        return bcrypt.compare(password, this.password);
}


// Json web token  12th vid

userSchema.methods.generateToken = function(){

    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30D"
        }
        );
    } catch (error) {
        console.error(error);
    }

}; 

// define the model or the collection name


const User = new mongoose.model("Users", userSchema);

module.exports = User;