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
type OptNode = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn min_depth(root: OptNode) -> i32 {
        fn depth(root: &OptNode) -> i32 {
            match root {
                Some(node) => {
                    let node = node.borrow();
                    if node.left.is_none() && node.right.is_none() {
                        1
                    } else {
                        1 + depth(&node.left).min(depth(&node.right))
                    }
                }
                None => i32::MAX,
            }
        }


        match root {
            Some(_) => depth(&root),
            None => 0
        }
    }
}