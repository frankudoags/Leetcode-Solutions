# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if not head or not head.next: return True
        astr = ''
        while head:
            astr += str(head.val)
            head = head.next
        print(astr)
        x = astr[::-1]
        print(x)
        
        return x == astr
        