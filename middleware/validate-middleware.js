const validate = (schema) => async (req, res, next) => {

    try {

        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
        
    } catch (err) {

        const status = 422;
        const message = "Fill the input properly"; 
        const extraDetails = err.errors[0].message;
        console.log(status);
        // res.status(400).json({msg:err});
        const error = {
            status, 
            message,
            extraDetails,
        };

        console.log(error);
        res.status(status).json({ error: message, details: extraDetails });
        next(error);
    }
};

module.exports = validate;
