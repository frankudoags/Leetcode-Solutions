/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head, start = head, index = 1;
    while(index < left){
        start = curr;
        curr = curr.next;
        index++;
    }
    
    let reverse = null, tail = curr;
    
    while(index >= left && index <= right){
        let next = curr.next;
        [curr.next, reverse] = [reverse, curr];
        curr = next;
        index++;
    }
    
    start.next = reverse;
    tail.next = curr;
    
    return left > 1 ? head : reverse
};