function invalidTransactions(transactions: string[]): string[] {

    let arr = []
    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i].split(',')
        arr.push(new Transaction(trans[0], Number(trans[1]), Number(trans[2]), trans[3]))
    }

    let invalidIndex = new Array(transactions.length).fill(false);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].amount > 1000) invalidIndex[i] = true
        let trans_i = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue
            let trans_j = arr[j];
            if (Math.abs(trans_i.time - trans_j.time) <= 60) {
                if (trans_i.name == trans_j.name && trans_i.city != trans_j.city) {
                    invalidIndex[i] = true;
                    invalidIndex[j] = true;
                }
            }
        }
    }
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (invalidIndex[i]) {
            ans.push(arr[i].spread())
        }
    }

    return ans
};


class Transaction {
    name: string;
    time: number;
    amount: number;
    city: string;

    constructor(name: string, time: number, amount: number, city: string) {
        this.name = name;
        this.time = Number(time);
        this.amount = Number(amount);
        this.city = city;
    }

    spread() {
        return `${this.name},${this.time},${this.amount},${this.city}`
    }
}