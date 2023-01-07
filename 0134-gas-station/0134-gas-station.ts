function canCompleteCircuit(gas: number[], cost: number[]): number {
    let t_gas = 0, t_cost = 0, curr = 0, start = 0;
        for(let i = 0; i < gas.length; i++){
            t_gas += gas[i];
            t_cost += cost[i];
            curr += gas[i] - cost[i];
            if(curr < 0){
                start = i + 1;
                curr = 0;
            }
        }
    return t_gas < t_cost ? -1 : start
};