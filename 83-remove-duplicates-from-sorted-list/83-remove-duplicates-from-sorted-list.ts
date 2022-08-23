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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) return null;
    if(!head.next) return head;
    let newHead: ListNode = head;
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