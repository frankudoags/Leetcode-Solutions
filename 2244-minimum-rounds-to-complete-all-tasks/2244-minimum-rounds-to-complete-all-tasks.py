class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        dict, ans = {}, 0
        for task in tasks:
            if task not in dict:
                dict[task] = 0
            dict[task] += 1
        
        for key,val in dict.items():
            if val == 1:
                return -1
            ans += (val//3) if val % 3 == 0 else ((val//3) + 1 )
        return ans
        