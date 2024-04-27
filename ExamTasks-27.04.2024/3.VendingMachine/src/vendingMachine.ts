import { Drink } from "./drink";
export class VendingMachine {
  private buttonCapacity: number;
  private drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  public addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
    }
  }

  public removeDrink(name: string): boolean {
    const initialLength = this.drinks.length;
    this.drinks = this.drinks.filter((drink) => drink['name'] !== name);
    return this.drinks.length !== initialLength;
  }

  public getLongest(): string {
    const longest = this.drinks.reduce((prev, current) =>
      prev.volume > current.volume ? prev : current
    );
    return longest.toString();
  }

  public getCheapest(): string {
    const cheapest = this.drinks.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
    return cheapest.toString();
  }

  public buyDrink(name: string): string {
    const drink = this.drinks.find((drink) => drink['name'] === name);
    return drink.toString();
  }

  public getCount(): number {
    return this.drinks.length;
  }

  public report(): string {
    let report = 'Drinks available:\n';
    this.drinks.forEach((drink) => (report += drink.toString() + '\n'));
    return report.trim();
  }
}
