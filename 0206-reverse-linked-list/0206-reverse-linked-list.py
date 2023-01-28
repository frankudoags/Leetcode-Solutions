# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        reverse, temp = None, head
        while temp:
            [next, temp.next, reverse] = [temp.next, reverse, temp]
            temp = next
        
        return reverse