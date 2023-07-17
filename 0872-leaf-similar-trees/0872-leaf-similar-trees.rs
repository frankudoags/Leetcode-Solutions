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
    pub fn leaf_similar(root1: OptNode, root2: OptNode) -> bool {
        let (mut arr1, mut arr2) = (vec![], vec![]);

        fn dfs(root: &OptNode, arr: &mut Vec<i32>) {
            if let Some(node) = root {
                let node = node.borrow();
                if node.left.is_none() && node.right.is_none() {
                    arr.push(node.val);
                }
                dfs(&node.left, arr);
                dfs(&node.right, arr);
            }
        }

        dfs(&root1, &mut arr1);
        dfs(&root2, &mut arr2);

        if arr1.len() != arr2.len() { return false; }

        for i in 0..arr1.len() {
            if arr1[i] != arr2[i] { return false; }
        }

        true
    }
}