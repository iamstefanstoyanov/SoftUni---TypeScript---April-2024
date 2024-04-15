/* function mycalorieObject(data: string[]): void {
    const calorieObject: { [food: string]: number } = {};

    for (let i = 0; i < data.length; i += 2) {
        const food = data[i];
        const calories = parseInt(data[i + 1]);
        calorieObject[food] = calories;
    }

    console.log(calorieObject);
}

mycalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
mycalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);


function createPerson(firstName: string, lastName: string, age: string): { firstName: string, lastName: string, age: number } {
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age)
    };
    return person;
}

const person = createPerson("Peter", "Pan", "20");
console.log(person);



function createHeroesRegister(heroData: string[]): void {
    interface Hero {
        heroName: string;
        heroLevel: number;
        items: string[];
    }

    const heroes: Hero[] = [];

    for (const data of heroData) {
        const [heroName, heroLevelStr, itemsStr] = data.split(" / ");
        const heroLevel = parseInt(heroLevelStr);
        const items = itemsStr.split(", ");
        const hero: Hero = {
            heroName: heroName,
            heroLevel: heroLevel,
            items: items
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`Items => ${hero.items.join(", ")}`);
    }
}

const heroData = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];
createHeroesRegister(heroData);



function parseTableRows(rows: string[]): void {
    rows.forEach(row => {
        const [town, latitudeStr, longitudeStr] = row.split(" | ").map(val => val.trim());
        const latitude = parseFloat(latitudeStr).toFixed(2);
        const longitude = parseFloat(longitudeStr).toFixed(2);

        const obj = {
            town: town,
            latitude: latitude,
            longitude: longitude
        };

        console.log(obj);
    });
}

const inputRows = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
];
parseTableRows(inputRows);
 

function createTownRegistry(data: string[]): void {
    const townPopulationMap: { [town: string]: number } = {};

    data.forEach(entry => {
        const [town, populationStr] = entry.split(" <-> ");
        const population = parseInt(populationStr);

        if (town in townPopulationMap) {
            townPopulationMap[town] += population;
        } else {
            townPopulationMap[town] = population;
        }
    });

    for (const town in townPopulationMap) {
        console.log(`${town} : ${townPopulationMap[town]}`);
    }
}

const townData = [
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
];
createTownRegistry(townData);

const townData2 = [
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
];
createTownRegistry(townData2);


interface ProductInfo {
    town: string;
    price: number;
}

interface ProductPrices {
    [productName: string]: ProductInfo;
}

function findLowestPrices(input: string[]): void {
    const productPrices: ProductPrices = {};

    input.forEach(entry => {
        const [town, product, priceStr] = entry.split(" | ");
        const price = parseFloat(priceStr);

        if (!(product in productPrices) || price < productPrices[product].price) {
            productPrices[product] = { town, price };
        }
    });

    for (const productName in productPrices) {
        const productInfo = productPrices[productName];
        console.log(`${productName} -> ${productInfo.price} (${productInfo.town})`);
    }
}

const input: string[] = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

findLowestPrices(input);
*/