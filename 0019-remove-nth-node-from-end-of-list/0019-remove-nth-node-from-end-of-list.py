# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode();
        dummy.next = head;
        slow, fast = dummy,head;
        #give fast a head-start
        for i in range(n):
            fast = fast.next;
        while fast:
            fast = fast.next;
            slow = slow.next;

        slow.next = slow.next.next;

        return dummy.next
        