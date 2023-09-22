class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True
        if len(s) > len(t):
            return False
        
        ans = 0

        for i in range(len(t)):
            if s[ans] == t[i]:
                ans += 1
                if ans == len(s):
                    break
        
        return ans == len(s)
        