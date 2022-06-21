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
    if(!head) return null;
    if(head.next === null) return head;
    let currentNode = head;
    let reverse = null;
    let next;
    while(currentNode) {
    next = currentNode.next;
    currentNode.next = reverse;
    reverse = currentNode;
    currentNode = next;
    }
    return reverse;
};