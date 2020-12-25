var shopper = {
    firstName: " Dallas ",
    lastName: " Smith ",
    storeCredit: 100.00,
    age: " 45 ",
    male: true,
    groceryCart: [" beer", "chips", "french onion dip", "hotdogs", "hot dog buns" ],
    listCartItems: function (){
        return shopper.firstName + shopper.lastName + shopper.age + "Went to the store to buy food for the party to watch the football game and used his" + shopper.storeCredit + "to purchase the following items" + shopper.groceryCart
    }
}
console.log( shopper.listCartItems() );