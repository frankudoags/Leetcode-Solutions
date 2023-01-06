class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int], experience: List[int]) -> int:
        energy_sum = 1
        for e in energy:
            energy_sum += e
        ans = energy_sum - initialEnergy if energy_sum - initialEnergy > 0 else 0;
        
        exp = initialExperience;
        for i in range(len(energy)):
            if experience[i] >= exp:
                ans += experience[i] - exp + 1;
                exp += experience[i] - exp + 1;
            
            exp += experience[i];
        return ans
        