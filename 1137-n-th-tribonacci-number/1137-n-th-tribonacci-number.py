class Solution:
    '''
    - if s_num is in array, ie if len(arr) + 1 >= s_num, return arr[s_num]
    - else
    '''
    def tribonacci(self, n: int) -> int:
        arr = [0, 1, 1]
        if n == 0: return 0
        if n == 1 or n == 2: return arr[1] or arr[2]
        
        def rec(s_num):
            if len(arr) > s_num:
                return arr[s_num]
            else:
                temp = rec(s_num -3) + rec(s_num -2) + rec(s_num - 1)
                arr.append(temp)
                return temp
            
                      
        return rec(n)
    
    
    
        
        
        
        
            
        
        