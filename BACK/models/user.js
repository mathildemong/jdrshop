class User{
    constructor(userId, role, lastname, firstname, adress, country, postcode, city, phone, email, password){
        this.userId = userId;
        this.role = role;
        this.lastname = lastname;
        this.firstname = firstname;
        this.country = country;
        this.postcode = postcode;
        this.city = city;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
        this.password = password;
        //this.creationDate = creationDate; //Creation Date is infer in userId


    }
}

// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

// const userSchema = mongoose.Schema({
//     lastname: {type: String, required: true},
//     firstname: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     password: {type: String, required: true},
// });

// userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('User', userSchema);

module.exports = {User};