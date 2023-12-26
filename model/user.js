class User{
    constructor(userId, role, name, surname, adress, country, postcode, city, phone, mail, password, creationDate){
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
        this.creationDate = creationDate;

    }
}

module.exports = {User};