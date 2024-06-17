const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(10) // Minimum length 10
.is().max(20) // Maximum length 20
.has().uppercase(2) // Minimum uppercase letters 2
.has().lowercase() 
.has().digits(2) // Minimum digits 2
.has().not().spaces() // No spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        return res.status(400).json({ message: 'Invalid password !' });
    } else {
        next();
    }
};