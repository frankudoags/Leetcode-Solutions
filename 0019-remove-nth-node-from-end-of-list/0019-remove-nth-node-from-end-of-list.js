/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let slow  = dummy, fast = head;
    //give fast a head-start
    for(let i = 0; i < n; i++) fast = fast.next;
    //start moving both tilll end, slow will stop at exactly (n - 1)th node
    //because fast moved `n` nodes already
    while(fast){
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy.next
};
