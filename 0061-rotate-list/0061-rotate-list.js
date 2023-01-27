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
    if(!head ||!head.next || !k) return head;
    const length = getLen(head);
    console.log(length)
    let times = k % length;
    
    while(times > 0){
        let head_ptr = rotate(head);
        head = head_ptr
        times--
    }
    return head
};

const getLen = (head) => {
    let len = 0;
    let current = head;
    while(current){
        current = current.next;
        len++;
    }
    return len
};
const rotate = (head) => {
    let tail = head;
    let prev = null;
    let len = 1;
    while(tail.next !== null){
        [prev, tail] = [tail, tail.next];
        len++
    }
    prev.next = null;
    tail.next = head;
    return tail 
};