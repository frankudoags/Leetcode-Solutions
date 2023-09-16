const DIRS: [(i32, i32); 4] = [(0, 1), (1, 0), (-1, 0), (0, -1)];

impl Solution {
    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let mut grid = grid;
        let (row, col) = (grid.len(), grid[0].len());
        let mut count = 0;

        for i in 0..row {
            for j in 0..col {
                if grid[i][j] == '1' {
                    count += 1;
                    //perform dfs
                    Self::dfs(i as i32, j as i32, row as i32, col as i32, &mut grid);
                }
            }
        }

        return count;
    }

    pub fn dfs(i: i32, j: i32, row: i32, col: i32, grid: &mut Vec<Vec<char>>) {
        //boundary and validity checks
        if i < 0 || j < 0 || i >= row || j >= col || grid[i as usize][j as usize] == '0' {
            return;
        }

        grid[i as usize][j as usize] = '0';

        for dir in DIRS {
            let i_ = i + dir.0;
            let j_ = j + dir.1;

            Self::dfs(i_, j_, row, col, grid);
        }
    }
}