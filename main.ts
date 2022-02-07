function getFinalPrice(price: number, discount: number) {
    return price - price/discount;
}

console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(100, 10));

const age = 25;
function getTax(income: number): number {
    return income * 0.15;
}
let yourTax = getTax(50000);