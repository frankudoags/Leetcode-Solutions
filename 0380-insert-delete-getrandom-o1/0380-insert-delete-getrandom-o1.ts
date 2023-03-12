class RandomizedSet {
    map: Map<number, number>
    constructor() {
        this.map = new Map();
    }

    insert(val: number): boolean {
        if(this.map.has(val)) return false;
        this.map.set(val, val);
        return true;
    }

    remove(val: number): boolean {
        if(!this.map.has(val)) return false;
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        let index = Math.floor(Math.random() * this.map.size);
        let counter = 0;
        for(let key of this.map.keys()){
            if(counter++ === index) return key 
        }
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */