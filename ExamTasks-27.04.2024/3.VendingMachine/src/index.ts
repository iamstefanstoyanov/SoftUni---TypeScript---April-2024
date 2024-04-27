import { Drink } from "./drink";
import { VendingMachine } from "./vendingMachine";

function main() {
  const vendingMachine = new VendingMachine(6);
  const tea = new Drink('Tea', 1.5, 300);
  const coffee = new Drink('Coffee', 2.0, 120);
  const hotChocolate = new Drink('Hot Chocolate', 2.5, 200);
  const latte = new Drink('Latte', 3.5, 220);
  const cappuccino = new Drink('Cappuccino', 2.8, 180);
  const mocha = new Drink('Mocha', 2.1, 150);
  const herbalTea = new Drink('Herbal Tea', 1.75, 300);
  console.log('<-------------------------->');
  console.log(vendingMachine.getCount());
  console.log('<-------------------------->');
  vendingMachine.addDrink(tea);
  vendingMachine.addDrink(coffee);
  vendingMachine.addDrink(hotChocolate);
  vendingMachine.addDrink(latte);
  vendingMachine.addDrink(cappuccino);
  vendingMachine.addDrink(mocha);
  vendingMachine.addDrink(herbalTea);
  console.log(vendingMachine.getCount());
  console.log('<-------------------------->');
  console.log(vendingMachine.removeDrink('Herbal Tea'));
  console.log('<-------------------------->');
  console.log(vendingMachine.removeDrink('Tea'));
  console.log('<-------------------------->');
  console.log(vendingMachine.getLongest());
  console.log('<-------------------------->');
  console.log(vendingMachine.getCheapest());
  console.log('<-------------------------->');
  console.log(vendingMachine.buyDrink('Cappuccino'));
  console.log('<-------------------------->');
  console.log(vendingMachine.report());
}

main();
