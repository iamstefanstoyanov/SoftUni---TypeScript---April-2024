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


abstract class CreateAccount<T, U> {
    constructor(protected bankName: T, protected bankID: U) {}
}

class PersonalAccount<T, U> extends CreateAccount<T, U> {
    readonly ownerName: string;
    money: number = 0;
    recentTransactions: { [key: string]: number } = {};

    constructor(bankName: T, bankID: U, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.money += amount;
    }

    expense(amount: number, expenseType: string): void {
        if (this.money >= amount) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            } else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        } else {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }

    showDetails(): string {
        let totalMoneySpentOnExpenses = 0;
        for (const expenseType in this.recentTransactions) {
            totalMoneySpentOnExpenses += this.recentTransactions[expenseType];
        }
        return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
    }
}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());

let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
 */