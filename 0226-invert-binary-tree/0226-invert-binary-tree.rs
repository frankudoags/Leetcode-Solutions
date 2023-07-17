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
        
        //helper function
        fn invert(root: & TreeRef) {
            //check that node is not null
            if let Some(node) = root {
                //borrow mutable reference
                let mut node = node.borrow_mut();
                //hold left node in a variable
                let temp = node.left.take();
                // assign swap left for right
                node.left = node.right.take();
                //swap right for left
                node.right = temp;
                //use recursion to perform the same operation for left and right nodes
                invert(&node.left);
                invert(&node.right);
            }
        }
        
        //invert the tree
        invert(&root);
        
        //return the tree
        root
    }
}

//traverse the tree, on each node, borrow mutably and swap the children
// nodes, then recursively perform the same operation on each child node