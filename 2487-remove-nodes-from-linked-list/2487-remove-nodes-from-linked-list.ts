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

function removeNodes(head: ListNode | null): ListNode | null {
    const stack: ListNode[] = [];
    
    let temp = head;
    while(temp) {
        while(stack.length && stack[stack.length - 1].val < temp.val) {
            stack.pop();
        }
        stack.push(temp);
        temp = temp.next;
    }
    
    let ans = new ListNode(0);
    let iter = ans;
    
    for(let node of stack) {
        iter.next = node;
        iter = iter.next;
    }
    
    return ans.next;
};
