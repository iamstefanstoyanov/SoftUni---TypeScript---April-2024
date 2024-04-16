import { FoodAndBeverages } from './foodAndBeverages';

export class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: { customerName: string; visited: boolean; }[];

    constructor(placesToVisit: { customerName: string; visited: boolean; }[]) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false): string {
        const existingCustomer = this.placesToVisit.find(customer => customer.customerName === customerName);
        if (existingCustomer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        this.placesToVisit.push({ customerName, visited });
        return `${customerName} just became your client.`;
    }

    visitCustomer(customerName: string): void {
        const customer = this.placesToVisit.find(customer => customer.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer.`);
        }
        customer.visited = true;
    }

    showCustomers(): string {
        return this.placesToVisit.map(customer => `${customer.customerName} -> ${customer.visited}`).join('\n');
    }
}