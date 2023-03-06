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
var reverseList = function(head) {
    if(!head || !head.next) return head
    
    let reverse = null;
    while(head){
        let temp = head.next;
        head.next = reverse;
        reverse = head;
        head = temp;
    }
    
    return reverse
};