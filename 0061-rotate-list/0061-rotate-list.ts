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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head ||!head.next) return head;
    let times = k;
    while(times > 0){
        head = rotate(head);
        times--
    }
    return head
};

const rotate = (head: ListNode | null) => {
    let tail = head;
    let prev = null;
    while(tail.next !== null){
        prev = tail;
       tail = tail.next;
    }
    prev.next = null;
    tail.next = head;
    return tail;
}