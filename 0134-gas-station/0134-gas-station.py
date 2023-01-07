class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        t_gas,t_cost, curr, start = 0,0,0,0
        for i in range(len(gas)):
            t_gas += gas[i]
            t_cost += cost[i]
            curr += gas[i] - cost[i]
            if curr < 0 :
                start = i + 1
                curr = 0
            
        return -1 if t_gas < t_cost else start
        