// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
            //hold reverse
            let mut rev = None;
        
            //mutable reference of head of linkedlist
            let mut curr = head;
        
            //while loop that checks that the current element
            //in the linkedlist is not a None type
            while let Some(mut node) = curr.take() {
                
                //store a ref to the rest of the linked list
                let mut next = node.next.take();
                
                //assign current element .next to rev, (main reversing technique)
                node.next = rev;
                
                //restore rev to new reversed list, store in a Some() type
                rev = Some(node);
                
                //move curr to the ref of the rest we stored initially
                curr = next;
            }
        
            //return rev
            rev
        
    }
}