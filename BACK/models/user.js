class User{
    constructor(userId, role, name, surname, adress, country, postcode, city, phone, mail, password){
        this.userId = userId;
        this.role = role;
        this.username = name;
        this.surname = surname;
        this.country = country;
        this.postcode = postcode;
        this.city = city;
        this.adress = adress;
        this.phone = phone;
        this.mail = mail;
        this.password = password;
        //this.creationDate = creationDate; //Creation Date is infer in userId


    }
}

module.exports = {User};