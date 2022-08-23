/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    let newHead = head;
    while(newHead.next !== null) {
        if(newHead.val == newHead.next.val) 
        {
            newHead.next = newHead.next.next;
        }
        else{
            newHead = newHead.next;
        }
    }
    return head;
};