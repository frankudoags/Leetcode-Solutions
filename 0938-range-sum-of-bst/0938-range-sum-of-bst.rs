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
    pub fn range_sum_bst(root: OptNode, low: i32, high: i32) -> i32 {
        let mut res = 0;

        fn inorder_range_sum_helper(root: &OptNode, res: &mut i32, low: &i32, high: &i32) {
            if let Some(node) = root {
                let node = node.borrow();
                if node.val >= *low && node.val <= *high {
                    *res += node.val;
                }
                inorder_range_sum_helper(&node.left, res, low, high);
                inorder_range_sum_helper(&node.right, res, low, high);
            }
        }

        inorder_range_sum_helper(&root, &mut res, &low, &high);
        res
    }
}

//same logic like preorder, but instead of pushing the node.val to an array
//run the range checks and if it passes, increment range sum by node.val