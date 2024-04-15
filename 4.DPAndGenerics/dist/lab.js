/* class Box<T> {
    constructor(private data: T) {}

    toString(): string {
        return `${this.data} is of type ${typeof this.data}`;
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());

class CompareElements<T> {
    constructor(private elements: T[]) {}

    compare(comparator: T): number {
        let count = 0;
        for (const element of this.elements) {
            if (element === comparator) {
                count++;
            }
        }
        return count;
    }
}


let c1 = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c1.compare('b'));

let c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c2.compare(1));


interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
  dealershipName: T;
  soldCars: number;
  modelsSold: { [key: string]: T };

  constructor(dealershipName: T) {
    this.dealershipName = dealershipName;
    this.soldCars = 0;
    this.modelsSold = {};
  }

  sellCar(dealerID: T, model: T): void {
    this.modelsSold[String(dealerID)] = model;
    this.soldCars++;
  }

  showDetails(): string {
    let details = `${this.dealershipName}:\n`;
    for (const dealerID in this.modelsSold) {
      if (this.modelsSold.hasOwnProperty(dealerID)) {
        const model = this.modelsSold[dealerID];
        details += `${dealerID} sold ${model}\n`;
      }
    }
    return details;
  }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreateAccount = /** @class */ (function () {
    function CreateAccount(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
    return CreateAccount;
}());
var PersonalAccount = /** @class */ (function (_super) {
    __extends(PersonalAccount, _super);
    function PersonalAccount(bankName, bankID, ownerName) {
        var _this = _super.call(this, bankName, bankID) || this;
        _this.money = 0;
        _this.recentTransactions = {};
        _this.ownerName = ownerName;
        return _this;
    }
    PersonalAccount.prototype.deposit = function (amount) {
        this.money += amount;
    };
    PersonalAccount.prototype.expense = function (amount, expenseType) {
        if (this.money >= amount) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            }
            else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        }
        else {
            throw new Error("You can't make ".concat(expenseType, " transaction"));
        }
    };
    PersonalAccount.prototype.showDetails = function () {
        var totalMoneySpentOnExpenses = 0;
        for (var expenseType in this.recentTransactions) {
            totalMoneySpentOnExpenses += this.recentTransactions[expenseType];
        }
        return "Bank name: ".concat(this.bankName, "\nBank ID: ").concat(this.bankID, "\nOwner name: ").concat(this.ownerName, "\nMoney: ").concat(this.money, "\nMoney spent: ").concat(totalMoneySpentOnExpenses);
    };
    return PersonalAccount;
}(CreateAccount));
// Example usage
var account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');
account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());
var account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
