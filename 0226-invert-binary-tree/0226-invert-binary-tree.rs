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
type TreeRef = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn invert_tree(root: TreeRef) -> TreeRef {
        fn invert(root: & TreeRef) {
            if let Some(node) = root {
                let mut node = node.borrow_mut();
                let temp = node.left.take();
                node.left = node.right.take();
                node.right = temp;
                invert(&node.left);
                invert(&node.right);
            }
        }
        invert(&root);
        root
    }

}