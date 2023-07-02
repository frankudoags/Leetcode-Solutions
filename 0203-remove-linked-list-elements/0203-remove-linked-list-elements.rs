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
use std::mem::swap;

impl Solution {
    pub fn remove_elements(mut head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
        //node for answer to be returned
        let mut new_head = None;
        //mutable reference
        let mut tail = &mut new_head;     
        loop {
            if head.is_none() {
                return new_head
            }           
            // Get a mutable reference to the current head node
            let head_node = head.as_mut().unwrap();
            
            //check if current head val matches value to be removed
            if head_node.val == val {
                //check if there's a next node, so we can skip it
                if let Some(next_node) = head_node.next.take() {
                    head_node.val = next_node.val;
                    head_node.next = next_node.next;
                } else {
                    head = None;
                }
                continue;
            }
            
            //update answer to be returned
            swap(tail, &mut head);
            //move tail ref to next node
            tail = &mut tail.as_mut().unwrap().next;
            // Swap the tail reference back with the current head
            swap(tail, &mut head);
        }
    }
}
