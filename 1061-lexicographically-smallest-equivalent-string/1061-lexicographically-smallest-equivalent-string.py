class Solution:
    def __init__(self):
        self.parent = [i for i in range(26)]
        
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        for i in range(len(s1)):
            a = self.find(ord(s1[i]) - 97)
            b = self.find(ord(s2[i]) - 97)
            if a > b:
                self.parent[a] = b
            elif b > a:
                self.parent[b] = a
        ans = ""
        for i in range(len(baseStr)):
            ans += chr(self.find(ord(baseStr[i]) - 97) + 97)
        return ans
    
    
    def find(self, word):
        if self.parent[word] == word:
            return word
        else:
            return self.find(self.parent[word])
        