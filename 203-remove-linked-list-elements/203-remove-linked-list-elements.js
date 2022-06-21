/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return null;
    let current = head;
    while(current.next) {
        if(current.next.val === val) current.next = current.next.next;
        else current = current.next;
    }
    if(head.val === val) head = head.next
    return head;
};