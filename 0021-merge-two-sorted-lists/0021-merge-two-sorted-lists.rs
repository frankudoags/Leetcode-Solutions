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
    pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if list1.is_none() {
            return list2;
        }
        if list2.is_none() {
            return list1;
        }
        let mut head = ListNode::new(0);
        let mut curr = &mut head;

        let (mut list1, mut list2) = (list1, list2);
        while list1.is_some() && list2.is_some() {
            if list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val {
                //take list1 completely
                //move curr one step forward
                // take list1 back from curr.next
                curr.next = list1.take();
                curr = curr.next.as_mut().unwrap();
                list1 = curr.next.take();
            } else {
                curr.next = list2.take();
                curr = curr.next.as_mut().unwrap();
                list2 = curr.next.take();
            }
        }

        if list1.is_some() {
            curr.next = list1.take();
        }
        
        if list2.is_some() {
            curr.next = list2.take();
        }

        head.next
    }
}