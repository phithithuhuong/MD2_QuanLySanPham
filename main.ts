import {ManagerProduct} from "./managerProduct";
import {Product} from "./Product";

let managerProduct = new ManagerProduct()
let input = require('readline-sync');
let menu = `
-----Choice-----
1. Add product
2. Display  product
3. Edit product
4. Delete product
5. Search by name
6. Search by price
7. Sort up and down price 
8. Down by amount
9. Search by type
10. Exit`
let exit = false;

while (!exit) {
    console.log(menu)
    let choice = +input.question('Enter by choice ?');
    switch (choice) {
        case 1:
            let id = input.question('Enter by id :')
            let name = input.question('Enter by name :')
            let price = input.question('Enter by price :')
            let amount = input.question('Enter by amount :')
            let type = input.question('Enter by type :')
            let product = new Product(id, name, price, amount, type)
            managerProduct.add(product);
            break;
        case 2:
            managerProduct.show();

            break;
        case 3:
            let idPr = input.question('Enter by id edit :')
            let id1 = input.question('Enter by id :')
            let name1 = input.question('Enter by name :')
            let price1 = input.question('Enter by price :')
            let amount1 = input.question('Enter by amount :')
            let type1 = input.question('Enter by type :')
            let product1 = new Product(id1, name1, price1, amount1, type1)
            managerProduct.edit(idPr, product1)
            break;
        case 4:
            let adi = input.question('Enter id delete :');
            managerProduct.remove(adi)
            break;
        case 5:
            let name2 = input.question('Search by name :')
            console.log(managerProduct.searchByName(name2))
            break;
        case 6:
            let low = input.question('Enter are low :')
            let high = input.question('Enter are high :')
            managerProduct.searchByPrice(low, high);
            // for (let i = 0; i < arr.length; i++) {
            //     console.log(arr[i].id + "|" + arr[i].name)
            // }
            break;
        case 7:
            let one = input.question('Enter choice 1 :')
            let two = input.question('Enter choice 2 :')
            managerProduct.upSortPrice(one, two)
            break;
        case 8:
            managerProduct.amountDown()
            break;
        case 9:
            let type2 = input.question('Enter by type search :');
            managerProduct.typeBySearch(type2)
            break;
        case 10:
            exit = true;
            break;
    }
}