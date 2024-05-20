class User{
    constructor(userId, role, name, surname, adress, country, postcode, city, phone, email, password){
        this.userId = userId;
        this.role = role;
        this.username = name;
        this.surname = surname;
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

module.exports = {User};