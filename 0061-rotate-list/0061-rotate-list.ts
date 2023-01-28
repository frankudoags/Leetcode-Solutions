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
    if(!head || !head.next || !k) return head;
    const length = getLen(head);
    let times = k % length;
    
    while(times > 0){
        head = rotate(head);
        times--
    }
    return head
};

const getLen = (head: ListNode | null) => {
    let len = 0;
    let current = head;
    while(current){
        current = current.next;
        len++;
    }
    return len;
}

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