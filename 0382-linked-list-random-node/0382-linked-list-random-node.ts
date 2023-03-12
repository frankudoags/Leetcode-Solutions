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

class Solution {
    range: number[]
    constructor(head: ListNode | null) {
        this.range = [];
        while(head){
            this.range.push(head.val);
            head = head.next;
        }
    }

    getRandom(): number {
        return this.range[Math.floor(Math.random()*this.range.length)]
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */