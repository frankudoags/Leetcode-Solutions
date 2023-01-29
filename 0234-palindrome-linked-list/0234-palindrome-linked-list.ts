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

function isPalindrome(head: ListNode | null): boolean {
    if(!head && !head.next) return true
    let str = ""
    while(head){
        str += head.val;
        head = head.next;
    }
    let x = str.split('').reverse().join("");
    return x == str
};