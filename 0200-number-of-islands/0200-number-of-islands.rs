use std::collections::VecDeque;

const DIRS: [(i32, i32); 4] = [(0, 1), (1, 0), (-1, 0), (0, -1)];

impl Solution {
    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let mut grid = grid;
        let (row, col, mut num_of_islands) = (grid.len(), grid[0].len(), 0);

        let mut q: VecDeque<(usize, usize)> = VecDeque::with_capacity(row * col);

        for i in 0..row {
            for j in 0..col {
                if grid[i][j] == '1' {
                    num_of_islands += 1;
                    //Approach 1: perform dfs
                    // Self::dfs(i as i32, j as i32, row as i32, col as i32, &mut grid);

                    //Approach 2: perform bfs

                    //push grid position of island into thr queue
                    q.push_back((i, j));
                    //search for islands in the queue, and try to find connecting islands and mark them
                    while !q.is_empty(){
                        for _ in 0..q.len() {
                            let (k, l) = q.pop_front().unwrap();
                                //boundary and validity checks
                                if k < 0 || l < 0 || k >= row || l >= col || grid[k as usize][l as usize] == '0' {
                                    continue;
                                }
                                grid[k as usize][l as usize] = '0';
                                
                                //push all adjacent edges into the queue
                                for dir in DIRS {
                                    q.push_back((k + dir.0 as usize, l + dir.1 as usize));
                                }
                        }
                    }


                }
            }
        }

        return num_of_islands;
    }

    // pub fn dfs(i: i32, j: i32, row: i32, col: i32, grid: &mut Vec<Vec<char>>) {
    //     //boundary and validity checks
    //     if i < 0 || j < 0 || i >= row || j >= col || grid[i as usize][j as usize] == '0' {
    //         return;
    //     }

    //     grid[i as usize][j as usize] = '0';

    //     for dir in DIRS {
    //         let i_ = i + dir.0;
    //         let j_ = j + dir.1;

    //         Self::dfs(i_, j_, row, col, grid);
    //     }
    // }
}