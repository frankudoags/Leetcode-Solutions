/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head ||!head.next) return head;
    let times = k;
    while(times > 0){
        head = rotate(head);
        times--
    }
    return head
};

const rotate = (head) => {
    let tail = head;
    let prev = null;
    while(tail.next !== null){
        prev = tail;
       tail = tail.next;
    }
    prev.next = null;
    tail.next = head;
    return tail; 
};