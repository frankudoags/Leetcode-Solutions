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
    pub fn remove_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        //create monotonic stack
        let mut s: Vec<Box<ListNode>> = Vec::new();
        
        //mutable head of link list
        let mut temp: Option<Box<ListNode>> = head;
        
        //while there all values have not been checked
        while let Some(mut node) = temp {
            // while there are values in the stack
            while let Some(top) = s.last() {
                // if the value at top of the stack is lesser
                // than current value, continue popping off values
                // else break
                if top.val < node.val { s.pop(); } else { break; }
            }
            
            // move pointer to next val
            temp = node.next.take();
            
            //push value into stack after ensuring it passes all checks
            s.push(node);
        }
        
        // use a nice reverse tactics to generate the ans 
        // by getting the value at top of the stack, making the old values
        // it's next values, and then making it the new old values
        // this technique is used when you're solving the question 
        // "Reverse a linked list"
        while let Some(mut elem) = s.pop() {
            elem.next = temp;
            temp = Some(elem);
        }
        
        return temp;
    }
}