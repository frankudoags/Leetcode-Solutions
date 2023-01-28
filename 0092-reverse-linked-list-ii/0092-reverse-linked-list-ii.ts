/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
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
}
