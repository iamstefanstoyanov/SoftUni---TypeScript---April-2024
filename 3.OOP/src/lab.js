/* class Car {
    private _brand: string;
    private _model: string;
    private _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get horsepower(): number {
        return this._horsepower;
    }

    set brand(value: string) {
        this._brand = value;
    }

    set model(value: string) {
        this._model = value;
    }

    set horsepower(value: number) {
        this._horsepower = value;
    }

    printInfo(): void {
        console.log(`The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`);
    }
}

function testCar(input: string): void {
    const [brand, model, horsepowerStr] = input.split(" ");
    const horsepower = parseInt(horsepowerStr);
    const car = new Car(brand, model, horsepower);
    car.printInfo();
}

testCar("Chevrolet Impala 390");
testCar("Skoda Karoq 150");


class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    set name(value: string) {
        this._name = value;
    }

    set age(value: number) {
        this._age = value;
    }

    printInfo(): void {
        console.log(`${this._name} is ${this._age} years old.`);
    }
}

function processPersonalInfo(input: string): void {
    const [name, ageStr] = input.split(" ");
    const age = parseInt(ageStr);
    const person = new Person(name, age);
    person.printInfo();
}

processPersonalInfo("Peter 12"); // Peter is 12 years old.
processPersonalInfo("Sofia 33"); // Sofia is 33 years old.


class BankAccount {
  private static _nextId: number = 1;
  private _id: number;
  private _balance: number = 0;
  private static _interestRate: number = 0.02;

  constructor() {
    this._id = BankAccount._nextId++;
  }

  static setInterestRate(interestRate: number): void {
    BankAccount._interestRate = interestRate;
  }

  static getInterestRate(): number {
    return BankAccount._interestRate;
  }

  deposit(amount: number): void {
    this._balance += amount;
    console.log(`Deposited ${amount} to ID${this._id}`);
  }

  getInterest(years: number): number {
    return this._balance * BankAccount._interestRate * years;
  }

  get id(): number {
    return this._id;
  }

  static accountExists(accounts: BankAccount[], id: number): boolean {
    for (const account of accounts) {
      if (account.id === id) {
        return true;
      }
    }
    return false;
  }

  static getAccountById(
    accounts: BankAccount[],
    id: number
  ): BankAccount | null {
    for (const account of accounts) {
      if (account.id === id) {
        return account;
      }
    }
    return null;
  }
}

function processCommands(commands: string[]): void {
  const accounts: BankAccount[] = [];

  for (const command of commands) {
    const tokens = command.split(' ');
    const commandType = tokens[0];

    switch (commandType) {
      case 'Create':
        const account = new BankAccount();
        accounts.push(account);
        console.log(`Account ID${account.id} created`);
        break;

      case 'Deposit':
        const accountId = parseInt(tokens[1]);
        const amount = parseInt(tokens[2]);
        if (BankAccount.accountExists(accounts, accountId)) {
          const accountToDeposit = BankAccount.getAccountById(
            accounts,
            accountId
          );
          if (accountToDeposit) {
            accountToDeposit.deposit(amount);
          }
        } else {
          console.log('Account does not exist');
        }
        break;

      case 'SetInterest':
        const interestRate = parseFloat(tokens[1]);
        BankAccount.setInterestRate(interestRate);
        break;

      case 'GetInterest':
        const accountIdForInterest = parseInt(tokens[1]);
        const years = parseInt(tokens[2]);
        if (BankAccount.accountExists(accounts, accountIdForInterest)) {
          const accountForInterest = BankAccount.getAccountById(
            accounts,
            accountIdForInterest
          );
          if (accountForInterest) {
            console.log(accountForInterest.getInterest(years).toFixed(2));
          }
        } else {
          console.log('Account does not exist');
        }
        break;

      case 'End':
        return;

      default:
        console.log('Invalid command');
        break;
    }
  }
}

processCommands(['Create', 'Deposit 1 20', 'GetInterest 1 10', 'End']);

processCommands([
  'Create',
  'Create',
  'Deposit 1 20',
  'Deposit 3 20',
  'Deposit 2 10',
  'SetInterest 1.5',
  'GetInterest 1 1',
  'GetInterest 2 1',
  'GetInterest 3 1',
  'End',
]);


class Animal {
    eat(): void {
        console.log("eating...");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("barking...");
    }
}

class Cat extends Animal {
    meow(): void {
        console.log("meowing...");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();

const cat = new Cat();
cat.eat();
cat.meow();

class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string;
    age?: number;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}

class Department {
    name: string;
    employees: Employee[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getAverageSalary(): number {
        if (this.employees.length === 0) return 0;
        const totalSalary = this.employees.reduce((acc, emp) => acc + emp.salary, 0);
        return totalSalary / this.employees.length;
    }
}

function calculateHighestAvgSalary(employees: Employee[]): Department {
    const departments: { [key: string]: Department } = {};

    for (const employee of employees) {
        if (!(employee.department in departments)) {
            departments[employee.department] = new Department(employee.department);
        }
        departments[employee.department].addEmployee(employee);
    }

    let highestAvgSalaryDepartment: Department | null = null;
    let highestAvgSalary = -1;

    for (const departmentName in departments) {
        const avgSalary = departments[departmentName].getAverageSalary();
        if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            highestAvgSalaryDepartment = departments[departmentName];
        }
    }

    return highestAvgSalaryDepartment!;
}


function printEmployees(department: Department): void {
    const sortedEmployees = department.employees.sort((a, b) => b.salary - a.salary);
    console.log(`Highest Average Salary: ${department.name}`);
    sortedEmployees.forEach(employee => {
        const email = employee.email ? employee.email : "n/a";
        const age = employee.age !== undefined ? employee.age : -1;
        console.log(`${employee.name} ${employee.salary.toFixed(2)} ${email} ${age}`);
    });
}

const employees1: Employee[] = [
    new Employee("Peter", 120.00, "Dev", "Development", "peter@abv.bg", 28),
    new Employee("Tina", 333.33, "Manager", "Marketing", undefined, 33),
    new Employee("Sam", 840.20, "ProjectLeader", "Development", "sam@sam.com"),
    new Employee("George", 0.20, "Freeloader", "Nowhere", undefined, 18)
];

const highestAvgSalaryDept1 = calculateHighestAvgSalary(employees1);
printEmployees(highestAvgSalaryDept1);

const employees2: Employee[] = [
    new Employee("Silver", 496.37, "Temp", "Coding", "silver@yahoo.com"),
    new Employee("Sam", 610.13, "Manager", "Sales"),
    new Employee("John", 609.99, "Manager", "Sales", "john@abv.bg", 44),
    new Employee("Venci", 0.02, "Director", "BeerDrinking", "beer@beer.br", 23),
    new Employee("Andre", 700.00, "Director", "Coding"),
    new Employee("Popeye", 13.3333, "Sailor", "SpinachGroup", "popeye@pop.ey")
];

const highestAvgSalaryDept2 = calculateHighestAvgSalary(employees2);
printEmployees(highestAvgSalaryDept2);

 */
var Pokemon = /** @class */ (function () {
    function Pokemon(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
    return Pokemon;
}());
var Trainer = /** @class */ (function () {
    function Trainer(name) {
        this.name = name;
        this.badges = 0;
        this.pokemons = [];
    }
    Trainer.prototype.addPokemon = function (pokemon) {
        this.pokemons.push(pokemon);
    };
    Trainer.prototype.processCommand = function (command) {
        var element = command.trim();
        var hasElement = this.pokemons.some(function (pokemon) { return pokemon.element === element; });
        if (hasElement) {
            this.badges++;
        }
        else {
            this.pokemons.forEach(function (pokemon) {
                pokemon.health -= 10;
            });
            this.pokemons = this.pokemons.filter(function (pokemon) { return pokemon.health > 0; });
        }
    };
    return Trainer;
}());
function processTournament(input) {
    var trainers = {};
    var i = 0;
    while (input[i] !== "Tournament") {
        var _a = input[i].split(" "), trainerName = _a[0], pokemonName = _a[1], element = _a[2], healthStr = _a[3];
        var health = parseInt(healthStr);
        if (!(trainerName in trainers)) {
            trainers[trainerName] = new Trainer(trainerName);
        }
        var trainer = trainers[trainerName];
        var pokemon = new Pokemon(pokemonName, element, health);
        trainer.addPokemon(pokemon);
        i++;
    }
    for (var j = i + 1; j < input.length; j++) {
        var command = input[j];
        if (command === "End") {
            break;
        }
        for (var trainerName in trainers) {
            if (trainers.hasOwnProperty(trainerName)) {
                var trainer = trainers[trainerName];
                trainer.processCommand(command);
            }
        }
    }
    var sortedTrainers = Object.keys(trainers).map(function (trainerName) { return trainers[trainerName]; })
        .sort(function (a, b) {
        if (b.badges !== a.badges) {
            return b.badges - a.badges;
        }
        // If badges are equal, sort by order of appearance in the input
        return input.indexOf(a.name) - input.indexOf(b.name);
    });
    sortedTrainers.forEach(function (trainer) {
        console.log("".concat(trainer.name, " ").concat(trainer.badges, " ").concat(trainer.pokemons.length));
    });
}
// Test
var input1 = [
    "Peter Charizard Fire 100",
    "George Squirtle Water 38",
    "Peter Pikachu Electricity 10",
    "Tournament",
    "Fire",
    "Electricity",
    "End"
];
processTournament(input1);
console.log();
var input2 = [
    "Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End"
];
processTournament(input2);
