class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        times = []
        for h in range(12):
            for m in range(60):
                if(bin(h) + bin(m)).count('1') == turnedOn:
                    times.append((str(h) + ":" + str(m).zfill(2)))
        
        return times