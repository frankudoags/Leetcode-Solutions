// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn sum_of_left_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut sum = 0;
        let mut stack = vec![(root.unwrap(), 0)];

        while let Some((n, is_left)) = stack.pop() {
            let mut n = n.borrow_mut();
            match(n.left.take(), n.right.take()) {
                (Some(x), Some(y)) => {
                    stack.push((x, !0));
                    stack.push((y, 0));
                },
                (Some(x), _) => stack.push((x, !0)),
                (_, Some(y)) => stack.push((y, 0)),
                _ => sum += n.val & is_left,
            }
        }

        sum
    }
}
//use stack to hold all nodes, when pushing nodes, store a flag to identify left nodes
// and then start popping off values, if the flag is true(i.e when you find a left node), increment a sum variable, Return sum when done