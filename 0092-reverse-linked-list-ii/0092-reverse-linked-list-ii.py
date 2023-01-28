# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        start, curr, index = head, head, 1
        while index < left:
            start = curr
            curr = curr.next
            index += 1
        
        reverse, tail = None, curr
        
        while index >= left and index <= right:
            next = curr.next
            [curr.next, reverse] = [reverse, curr]
            curr = next
            index += 1
        
        start.next = reverse
        tail.next = curr
        
        return head if left > 1 else reverse
        