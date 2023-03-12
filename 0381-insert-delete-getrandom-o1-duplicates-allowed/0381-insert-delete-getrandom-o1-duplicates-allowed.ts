class RandomizedCollection {
    list: number[]
    map: Record<number, any>
    constructor() {
        this.list = [];
        this.map = {};
    }

    insert(val: number): boolean {
        //push val to list
        this.list.push(val);
        //create set for the value if no set exists
        if(!this.map[val]) this.map[val] = new Set();
        //push index of the inserted value to the set
        this.map[val].add(this.list.length - 1);
        //return true if there are no duplicates
        return this.map[val].size === 1
    }

    remove(val: number): boolean {
        if(!this.map[val] || this.map[val].size == 0) return false;        
        let val_set = this.map[val], remove_id = this.list.length - 1;
        
        if(!val_set.has(remove_id)){
            let val_to_remove = this.list[this.list.length - 1];
            //grab first occurrence of val from the set
            remove_id = val_set.values().next().value;
            //swap first occurrence of val from the set with last element in list
            this.list[remove_id] = this.list[this.list.length - 1];
            //update map because an instance of last element(val_to_remove)
            //has been shifted, we need to delete the old instance from the set
            //and add the new instance
            this.map[val_to_remove].delete(this.list.length - 1);
            this.map[val_to_remove].add(remove_id);
        }
        
        this.map[val].delete(remove_id);
        this.list.pop();
        return true;
    }

    getRandom(): number {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */