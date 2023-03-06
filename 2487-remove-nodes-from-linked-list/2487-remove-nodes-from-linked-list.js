/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    if(!head || !head.next) return head;
    head = reverse(head);
    let max = 0;
    let curr = head;
    let main_ans = new ListNode(0);
    let ans = main_ans;
    while(curr){
       max = Math.max(max, curr.val);
        if(max <= curr.val){
            let temp = new ListNode(curr.val);
            ans.next = temp;
            ans = ans.next
        }
        curr = curr.next
    }
    return reverse(main_ans.next);
};

const reverse = (head) => {
    let rev = null;
    while(head){
        let temp = head.next;
        head.next = rev;
        rev = head;
        head = temp
    }
    return rev;
}