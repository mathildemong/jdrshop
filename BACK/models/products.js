class Product{
    // Changes: remove productId and creationDate
    // Why ? => Mongo automatically insert with an _id which is an ObjectId
    // => ObjectId are created with the creationDate inside and it can be infered from it ;) 
    constructor(name, category){
        this.productName = name;
        this.category = category;
    }
}

module.exports = {Product};