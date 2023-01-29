/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head && !head.next) return true
    let str = ""
    while(head){
        str += head.val;
        head = head.next;
    }
    let x = str.split('').reverse().join("");
    return x == str
};