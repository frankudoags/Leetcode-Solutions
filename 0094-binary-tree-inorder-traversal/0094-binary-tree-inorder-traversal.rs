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
    pub fn inorder_traversal(root: OptNode) -> Vec<i32> {
        let mut s: Vec<i32> = vec![];
        Self::inorder(&root, &mut s);
        s
    }

    fn inorder(node: &OptNode, s: &mut Vec<i32>) {
        //check that node is not None
        if let Some(n) = node {
            //borrow the node
            let b = n.borrow();
            Self::inorder(&b.left, s);
            s.push(b.val);
            Self::inorder(&b.right, s);
        }
    }
}