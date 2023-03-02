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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let sorted = new ListNode(1);
    //pointer to hold sorted
    let head = sorted;

    while(list1 || list2){
        let l1 = list1?.val ?? Infinity, l2 = list2?.val ?? Infinity;
        if(l1 < l2){
            [sorted.next, list1] = [list1, list1?.next];
        } else {
            sorted.next = list2;
            list2 = list2?.next;
        }
        sorted = sorted.next;
    }
    //skip initial null
    return head.next;
};