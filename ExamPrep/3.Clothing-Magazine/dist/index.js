class Cloth {
    color;
    size;
    type;
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    toString() {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
        else {
            console.log('No more capacity to add new clothes');
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((c) => c.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        if (this.clothes.length === 0)
            return undefined;
        return this.clothes.reduce((smallest, cloth) => smallest.size < cloth.size ? smallest : cloth);
    }
    getCloth(color) {
        return this.clothes.find((c) => c.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sortedClothes = this.clothes.sort((a, b) => a.size - b.size);
        const reportLines = sortedClothes.map((cloth) => cloth.toString());
        return `${this.type} magazine contains:\n${reportLines.join('\n')}`;
    }
}
function main() {
    // Initialize the repository (Magazine)
    const magazine = new Magazine("Zara", 20);
    // Initialize entity (Cloth)
    const cloth1 = new Cloth("red", 36, "dress");
    // Print Cloth
    console.log(cloth1.toString());
    // Product: dress with size 36, color red
    // Add Cloth
    magazine.addCloth(cloth1);
    // Remove Cloth
    console.log(magazine.removeCloth("black")); // false
    const cloth2 = new Cloth("brown", 34, "t-shirt");
    const cloth3 = new Cloth("blue", 32, "jeans");
    // Add Cloth
    magazine.addCloth(cloth2);
    magazine.addCloth(cloth3);
    // Get smallest cloth
    const smallestCloth = magazine.getSmallestCloth();
    console.log(smallestCloth?.toString());
    // Product: jeans with size 32, color blue
    // Get Cloth
    const getCloth = magazine.getCloth("brown");
    // Product: t-shirt with size 34, color brown
    console.log(getCloth?.toString());
    console.log(magazine.report());
    // Zara magazine contains:
    // Product: jeans with size 32, color blue
    // Product: t-shirt with size 34, color brown
    // Product: dress with size 36, color red
}
main();
