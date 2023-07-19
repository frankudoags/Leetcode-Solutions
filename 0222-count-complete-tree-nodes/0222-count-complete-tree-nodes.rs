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
    pub fn count_nodes(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut count:i32 = 0;
         if root.is_none() { return count; }
        
        fn count_rec(root:& Option<Rc<RefCell<TreeNode>>>, ans:&mut i32) {
            if let Some(node) = root {
                let node = node.borrow();
                count_rec(&node.left, ans);
                *ans += 1;
                count_rec(&node.right, ans);
            }
        }
        
        count_rec(&root, &mut count);
        count
    }
}