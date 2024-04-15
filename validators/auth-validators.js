const {z} = require("zod");


//createing an object schema
const signupSchema = z.object({
    username : z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must atleast of 3 characters*"})
    .max(255, {message:"Name must max 255 characters*"}),

    email : z
    .string({required_error:"Email is required"})
    .trim()
    .min(11,{message:"Email must atleast of 11 characters*"})
    .max(255, {message:"Email must max 255 characters*"}),

    phone : z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone must atleast of 10 characters*"})
    .max(20, {message:"Name must max 20 characters*"}),

    password : z
    .string({required_error:"Password is required"})
    .trim()
    .min(7, {message:"Password must atleast of 3 characters*"})
    .max(1024, {message:"Password must max 255 characters*"})
    
}); 


module.exports = signupSchema;