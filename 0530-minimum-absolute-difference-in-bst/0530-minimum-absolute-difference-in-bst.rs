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
    pub fn get_minimum_difference(root: OptNode) -> i32 {
        let mut arr = vec![];
        let mut res = i32::MAX;

        //function used to fill the arr with the nodes
        fn inorder(root: &OptNode, arr: &mut Vec<i32>) {
            if let Some(node) = root {
                let node = node.borrow();
                inorder(&node.left, arr);
                arr.push(node.val);
                inorder(&node.right, arr);
            }
        }

        inorder(&root, &mut arr);

        //now that we have all the nodes in an array, it's easy
        //compare the diff btw each element to the old result
        for i in 1..arr.len() {
            res = res.min(arr[i] - arr[i - 1]);
        }

        res

    }
}