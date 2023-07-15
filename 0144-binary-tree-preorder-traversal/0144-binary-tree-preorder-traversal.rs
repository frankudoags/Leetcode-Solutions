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
type OptTreeNode = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn preorder_traversal(root: OptTreeNode) -> Vec<i32> {
        let mut s = vec![];
        Self::preorder(&root, &mut s);
        s
    }
    
    fn preorder(node: &OptTreeNode, s: &mut Vec<i32>) {
        if let Some(n) = node {
            let b = n.borrow();
            s.push(b.val);
            Self::preorder(&b.left, s);
            Self::preorder(&b.right, s);
        }
    }
}