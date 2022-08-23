/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sorted = new ListNode(null);
    let head = sorted;
    
    while(list1 || list2) {
    let l1 = list1?.val ?? Infinity, l2 = list2?.val ?? Infinity;
    
    l1 < l2 ? [sorted.next, list1] = [list1, list1.next] :
    [sorted.next, list2] = [list2, list2.next];
    sorted = sorted.next;
    }

    return head.next;
};