impl Solution {
    pub fn is_valid(s: String) -> bool {
        //check if string's length is even, this helps check that every opening tag
        //indeed has a closing tag, kinda like a short circuit trigger, hehe
        if s.len() % 2 != 0 {
            return false;
        }
        // create a stack
        let mut stack: Vec<char> = Vec::new();

        //iterate through all elements, if its an opening bracket,
        //push it's respective closing tag into the stack, so that when you hit
        //a closing tag, you immediately pop the value on the stack and
        //expect both to match, return false if it doesn't
        for c in s.chars() {
            match c {
                '(' => stack.push(')'),
                '[' => stack.push(']'),
                '{' => stack.push('}'),
                _ => if stack.is_empty() || stack.pop() != Some(c) { return false; }
            }
        }

        // stack should be empty, if empty, true, else false
        return stack.is_empty();
    }
}