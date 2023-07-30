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
    pub fn increasing_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        //create a stack to hold values of tree nodes
        let mut stack = vec![];
        //helper function to fill stack in an inorder manner as needed
        fn fill_stack(root: &Option<Rc<RefCell<TreeNode>>>, arr: &mut Vec<i32>) {
            if let Some(node) = root {
                let node = node.borrow();
                fill_stack(&node.left, arr);
                arr.push(node.val);
                fill_stack(&node.right, arr);
            }
        }

        //fill_stack is invoked
        fill_stack(&root, &mut stack);

        //filled stack has to be reversed to match required solution
        stack.reverse();
        
        //new root node to be returned
        let mut new_root = Rc::new(RefCell::new(TreeNode::new(stack.pop().unwrap())));
        //a clone of new_root used to walk across new_root
        let mut curr = Rc::clone(&new_root);

        //provided stack is not empty, keep popping values off the stack
        // create a new tree node from popped off node
        // make curr.right the node, use Rc here to clone
        //move curr to the the right, by storing value in next_variable
         while let Some(node) = stack.pop() {
             let node = Rc::new(RefCell::new(TreeNode::new(node)));
             curr.borrow_mut().right = Some(Rc::clone(&node));
             let next = Rc::clone(curr.borrow().right.as_ref().unwrap());
             curr = next;
         }
        
        Some(new_root)
    }
}