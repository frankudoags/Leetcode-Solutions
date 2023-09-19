struct MyCircularQueue {
    pub queue: Vec<i32>,
    pub head: i32,
    pub tail: i32,
    pub size: i32
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyCircularQueue {

    fn new(k: i32) -> Self {
        Self {
            queue: vec![0; k as usize],
            head: -1,
            tail: -1,
            size: k
        }
    }
    
    fn en_queue(&mut self, value: i32) -> bool {
        if self.is_full() {
            return false;
        } 
        if self.is_empty(){
            self.head = 0;
            self.tail = 0;
            self.queue[self.tail as usize] = value;
            return true;

        }
        self.tail = (self.tail + 1) % self.size;
        self.queue[self.tail as usize] = value;
        return true;
    }
    
    fn de_queue(&mut self) -> bool {
        if self.is_empty() {
            return false;
        } 
        if self.head == self.tail {
            self.head = -1;
            self.tail = -1;
            return true;
        }
        self.head = (self.head + 1) % self.size;
        return true
    }
    
    pub fn front(&self) -> i32 {
        if self.is_empty() {
            return -1
        }
        return self.queue[self.head as usize]
    }
    
    pub fn rear(&self) -> i32 {
        if self.is_empty() {
            return -1
        }
        return self.queue[self.tail as usize]
    }
    
    pub fn is_empty(&self) -> bool {
        self.head == -1 && self.tail == -1
    }
    
    pub fn is_full(&self) -> bool {
        (self.tail + 1) % self.size == self.head
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * let obj = MyCircularQueue::new(k);
 * let ret_1: bool = obj.en_queue(value);
 * let ret_2: bool = obj.de_queue();
 * let ret_3: i32 = obj.front();
 * let ret_4: i32 = obj.rear();
 * let ret_5: bool = obj.is_empty();
 * let ret_6: bool = obj.is_full();
 */