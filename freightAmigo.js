const sum = (nums) => {
    let sum = 0;
    let tempSum = 0;
    let num = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const curNum = nums[i];
        const isConsecutive = curNum > num;
        if (isConsecutive) {
            // tempSum = num + curNum
            if (tempSum === 0) {
                tempSum = num + curNum
            } else {
                tempSum += curNum
            }
        } else if (tempSum > 0) {
            sum += tempSum;
            tempSum = 0;
        } 
        num = curNum;
    }
    if ( tempSum > 0) {
        sum += tempSum
    }
    return sum;
}

class Charge {
    static baseCurrency = "HKD"

    constructor(description, amount, currency = "HKD") {
        this.description = description
        this.amount = amount
        this.currency = currency
    }

    getAmount() {
        if(`${this.currency}`.toUpperCase() === "USD") {
            return this.amount * 7.8
        }

        if (this.currency === Charge.baseCurrency) {
            return this.amount;
        }

        return undefined;
    }
}

const payment_items = [
    new Charge("Pickup Charges", 100),
    new Charge("Freightage Charges", 100, "USD"),
]

let amount = payment_items.reduce((acc, charge, i) => {
    console.log(`Item ${i+1}: ${charge.currency} ${charge.amount}`)
    return acc+charge.getAmount();
},0)

console.log(`Total: ${Charge.baseCurrency} ${amount}`)
