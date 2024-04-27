export class Drink {
  private name: string;
  public price: number;
  public volume: number;

  constructor(name: string, price: number, volume: number) {
    this.name = name;
    this.price = price;
    this.volume = volume;
  }

  public toString(): string {
    return `Name: ${this.name}, Price: $${this.price.toFixed(2)}, Volume: ${
      this.volume
    } ml`;
  }
}
