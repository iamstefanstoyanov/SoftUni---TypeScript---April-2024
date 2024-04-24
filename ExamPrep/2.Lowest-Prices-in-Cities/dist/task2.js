function findLowestPrice(productsData) {
    const productPrices = {};
    for (const entry of productsData) {
        const [town, product, priceString] = entry.split(" | ");
        const price = parseFloat(priceString);
        if (!productPrices[product] || productPrices[product].price > price ||
            (productPrices[product].price === price && productPrices[product].town === town)) {
            productPrices[product] = { price, town };
        }
    }
    for (const [product, info] of Object.entries(productPrices)) {
        console.log(`${product} -> ${info.price} (${info.town})`);
    }
}
findLowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
