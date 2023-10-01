struct MinStack {
    pub stack: Vec<(i32, i32)>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {

    fn new() -> Self {
        Self {
            stack: Vec::new()
        }
    }
    
    fn push(&mut self, val: i32) {
        if self.stack.is_empty() {
            self.stack.push((val, val));
            return
        }
        self.stack.push((val, val.min(self.stack[(self.stack.len() - 1) as usize].1)))
    }
    
    fn pop(&mut self) {
        self.stack.pop();
    }
    
    fn top(&self) -> i32 {
        self.stack[(self.stack.len() - 1) as usize].0
    }
    
    fn get_min(&self) -> i32 {
        self.stack[(self.stack.len() - 1) as usize].1
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = MinStack::new();
 * obj.push(val);
 * obj.pop();
 * let ret_3: i32 = obj.top();
 * let ret_4: i32 = obj.get_min();
 */