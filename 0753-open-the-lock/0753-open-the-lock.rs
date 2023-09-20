use std::collections::{HashSet, VecDeque};

//enum State for node states instead of magic values or separate maps for dead ends and visited nodes
#[derive(Copy, Clone)]
enum State { Unvisited, Visited, DeadEnd, Target }

impl Solution {
    pub fn open_lock(deadends: Vec<String>, target: String) -> i32 {
        let mut map = [State::Unvisited; 10000];
        //parse each dead end to a usize(number) and set the map of that number to our deadend enum state
        deadends.into_iter().map(|s| s.parse::<usize>().unwrap()).for_each(|i| map[i] = State::DeadEnd);
        //set target in map 
        map[target.parse::<usize>().unwrap()] = State::Target;
        //minimum total number of turns
        let mut moves = 0;
        //create a deque with 0 as the only element in the deque
        let mut queue: VecDeque<_> = std::iter::once(0).collect();

        while !queue.is_empty() {
            for i in 0..queue.len() {
                let code = queue.pop_front().unwrap();
                match map[code] {
                    State::Target => return moves,
                    State::Visited | State::DeadEnd => (),
                    State::Unvisited => {
                        map[code] = State::Visited;
                        [1, 10, 100, 1000].iter().for_each(|factor| {
                            let digit = (code / factor) % 10;
                            queue.push_back(code - (digit * factor) + ((digit + 1) % 10) * factor);
                            queue.push_back(code - (digit * factor) + (digit.checked_sub(1).unwrap_or(9) * factor));
                        })
                    }
                }
            }
            moves += 1
        }
        -1
    }
}