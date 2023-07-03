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
            let mut rev = None;
            let mut curr = head;
            
            while let Some(mut node) = curr.take() {
                let mut next = node.next.take();
                node.next = rev;
                rev = Some(node);
                curr = next;
            }
            rev
        
    }
}