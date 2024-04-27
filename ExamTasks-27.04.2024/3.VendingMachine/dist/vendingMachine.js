"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const initialLength = this.drinks.length;
        this.drinks = this.drinks.filter((drink) => drink['name'] !== name);
        return this.drinks.length !== initialLength;
    }
    getLongest() {
        const longest = this.drinks.reduce((prev, current) => prev.volume > current.volume ? prev : current);
        return longest.toString();
    }
    getCheapest() {
        const cheapest = this.drinks.reduce((prev, current) => prev.price < current.price ? prev : current);
        return cheapest.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find((drink) => drink['name'] === name);
        return drink.toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        let report = 'Drinks available:\n';
        this.drinks.forEach((drink) => (report += drink.toString() + '\n'));
        return report.trim();
    }
}
exports.VendingMachine = VendingMachine;
