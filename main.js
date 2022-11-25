"use strict";
exports.__esModule = true;
var managerProduct_1 = require("./managerProduct");
var Product_1 = require("./Product");
var managerProduct = new managerProduct_1.ManagerProduct();
var input = require('readline-sync');
var menu = "\n-----Choice-----\n1. Add product\n2. Display  product\n3. Edit product\n4. Delete product\n5. Search by name\n6. Search by price\n7. Sort up and down price \n8. Down by amount\n9. Search by type\n10. Exit";
var exit = false;
while (!exit) {
    console.log(menu);
    var choice = +input.question('Enter by choice ?');
    switch (choice) {
        case 1:
            var id = input.question('Enter by id :');
            var name_1 = input.question('Enter by name :');
            var price = input.question('Enter by price :');
            var amount = input.question('Enter by amount :');
            var type = input.question('Enter by type :');
            var product = new Product_1.Product(id, name_1, price, amount, type);
            managerProduct.add(product);
        case 2:
            managerProduct.show();
            break;
        case 3:
            var idPr = input.question('Enter by id edit :');
            var id1 = input.question('Enter by id :');
            var name1 = input.question('Enter by name :');
            var price1 = input.question('Enter by price :');
            var amount1 = input.question('Enter by amount :');
            var type1 = input.question('Enter by type :');
            var product1 = new Product_1.Product(id1, name1, price1, amount1, type1);
            managerProduct.edit(idPr, product1);
            break;
        case 4:
            var adi = input.question('Enter id delete :');
            managerProduct.remove(adi);
            break;
        case 5:
            var name2 = input.question('Search by name :');
            console.log(managerProduct.searchByName(name2));
            break;
        case 6:
            var low = input.question('Enter are low :');
            var high = input.question('Enter are high :');
            var arr = managerProduct.searchByPrice(low, high);
            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i].id + "|" + arr[i].name);
            }
            break;
        case 7:
            var one = input.question('Enter choice 1 :');
            var two = input.question('Enter choice 2 :');
            managerProduct.upSortPrice(one, two);
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            exit = true;
            break;
    }
}
