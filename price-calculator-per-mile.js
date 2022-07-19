/*
0-50 miles => $0/mile
50-100 miles => $1.5/mile
>100 miles => $1/mile

eg.: for 120 miles => 50*0 + 50*1.5 * 20*1 = $95
*/

const rates = {
    50: 0,
    100: 1.5,
    "inf": 1
}

function priceCalculator(miles, rates) {
    let price = 0;
    rates = Object.entries(rates);
    let initialThreshold = rates[0][0]
    rates.forEach(([threshold, rate], index) => {
        if (threshold != "inf") {
            if (index > 0) {
                threshold = threshold - initialThreshold
                initialThreshold = threshold
            }
            price += Math.min(threshold, miles) * rate;
            miles = Math.max(0, miles - threshold);
        } else {
            price += miles * rate
        }
    })
    return price
}

// Testing:
const test1 = priceCalculator(120, rates);
const test2 = priceCalculator(50, rates);
const test3 = priceCalculator(100, rates);
const test4 = priceCalculator(51, rates);

console.log(test1 == 95)
console.log(test2 == 0)
console.log(test3 == 75)
console.log(test4 == 1.5)
