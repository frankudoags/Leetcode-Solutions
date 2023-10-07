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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let str1 = "";
    let str2 = "";
    
    while(l1){
        str1 = l1.val + str1;
        l1 = l1.next;
    }
    while(l2){
        str2 = l2.val + str2;
        l2 = l2.next;
    }
    
    let sum = BigInt(str1) + BigInt(str2);
    
    let sum2 = sum.toString().split('').reverse();

    let dummy = new ListNode(+sum2.pop());
    
    while(sum2.length > 0) {
        let node = new ListNode(+sum2.pop());
        node.next = dummy;
        dummy = node;
    }
    
    return dummy;
};