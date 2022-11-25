"use strict";
exports.__esModule = true;
exports.ManagerProduct = void 0;
var ManagerProduct = /** @class */ (function () {
    function ManagerProduct() {
        this.listProduct = [];
    }
    ManagerProduct.prototype.add = function (product) {
        this.listProduct.push(product);
    };
    ManagerProduct.prototype.show = function () {
        var list = this.listProduct;
        for (var i = 0; i < list.length; i++) {
            console.log(list[i].id + ' / ' + list[i].name + ' / ' + list[i].price + ' / ' + list[i].amount + ' / ' + list[i].type);
        }
    };
    ManagerProduct.prototype.idProduct = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i;
            }
        }
    };
    ManagerProduct.prototype.edit = function (id, product) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                this.listProduct[i] = product;
            }
        }
    };
    ManagerProduct.prototype.remove = function (id) {
        var index = this.idProduct(id);
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return this.listProduct.splice(index, 1);
            }
            return 'Delete is not ';
        }
    };
    ManagerProduct.prototype.searchByName = function (name) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].name.includes(name)) {
                return this.listProduct[i];
            }
        }
        return 'Not is name';
    };
    ManagerProduct.prototype.searchByPrice = function (low, high) {
        var prices = [];
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].price >= low && this.listProduct[i].price <= high) {
                prices.push(this.listProduct[i]);
            }
        }
        return prices;
    };
    ManagerProduct.prototype.upSortPrice = function (one, two) {
        console.log("\n        1. Up sort are price\n        2. Down sort are price");
        if (one == 1) {
            console.log(this.listProduct.sort(function (a, b) { return a.price - b.price; }));
        }
        else if (two == 2) {
            console.log(this.listProduct.sort(function (a, b) { return b.price - a.price; }));
        }
        else {
            console.log('Try again');
        }
    };
    ManagerProduct.prototype.amountDown = function () {
    };
    ManagerProduct.prototype.typeBySearch = function () {
    };
    return ManagerProduct;
}());
exports.ManagerProduct = ManagerProduct;
