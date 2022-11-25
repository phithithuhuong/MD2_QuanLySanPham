import {Product} from "./Product";

export class ManagerProduct {
    listProduct: Product[] = []

    add(product: Product): void {
        this.listProduct.push(product);
    }

    show() {

        let list = this.listProduct
        for (let i = 0; i < list.length; i++) {
            console.log(list[i].id + ' / ' + list[i].name + ' / ' + list[i].price + ' / '+
                list[i].amount+' / '+list[i].type)
        }


    }

    idProduct(id) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i
            }

        }
    }

    edit(id, product: Product) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                this.listProduct[i] = product
            }

        }

    }

    remove(id) {
        let index = this.idProduct(id)
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return this.listProduct.splice(index, 1)

            }
            return 'Delete is not '
        }


    }

    searchByName(name: string) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].name.includes(name)) {
                return this.listProduct[i];
            }
        }
        return 'Not is name';
    }

    searchByPrice(low: number, high: number) {
        let prices: Product[] = []
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].price >= low && this.listProduct[i].price <= high) {
                prices.push(this.listProduct[i]);
            }
        }
        return prices;
    }

    upSortPrice(one, two) {
        console.log(`
        1. Up sort are price
        2. Down sort are price`)
        if (one == 1) {
            console.log(this.listProduct.sort((a, b) => a.price - b.price))
        } else if (two == 2) {
            console.log(this.listProduct.sort((a, b) => b.price - a.price))
        } else {
            console.log('Try again')
        }

    }

    amountDown() {
        console.log(this.listProduct.sort((a, b)=>b.amount-a.amount))

    }

    typeBySearch(type) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if(this.listProduct[i].type.includes(type)){
                return this.listProduct[i]
            }

        }
    }
}



