function invalidTransactions(transactions: string[]): string[] {
    let arr = []
    for (let i = 0; i < transactions.length; i++) {
        let trans = transactions[i].split(',')
        arr.push(new Transaction(trans[0], Number(trans[1]), Number(trans[2]), trans[3]))
    }

    let invalidIndex = new Array(transactions.length).fill(false);
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].isAmountValid()) { invalidIndex[i] = true; continue }
        for (let j = 0; j < arr.length; j++) {
            if(i == j) continue
            if (arr[i].isInValidDueToTimeAndNaming(arr[j])) {
                invalidIndex[i] = true;
                invalidIndex[j] = true;
            }
        }
    }
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (invalidIndex[i]) ans.push(arr[i].spread())
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

    isAmountValid() {
        return this.amount <= 1000
    }

    isInValidDueToTimeAndNaming(other: Transaction) {
        if (Math.abs(this.time - other.time) <= 60) {
            if (this.name == other.name && this.city != other.city) return true
        }
    }
}