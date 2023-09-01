impl Solution {
    pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
        if is_connected.len() == 0 {
            return 0;
        }
        let n = is_connected.len();
        let mut uf = UnionFind::new(n);

        for row in 0..n {
            for col in 0..n {
                if is_connected[row][col] == 1 {
                    uf.union(row, col);
                }
            }
        }

        return uf.count as i32;
    }
}

struct UnionFind {
    pub roots: Vec<usize>,
    pub rank: Vec<usize>,
    pub count: usize
}

impl UnionFind {
    pub fn new( n: usize) -> Self {
        Self {
            roots: (0..n).collect(),
            rank: vec![0; n],
            count: n
        }
    }

    pub fn find(&mut self, x: usize) -> usize {
        if x == self.roots[x] {
            return x;
        }
        self.roots[x] = self.find(self.roots[x]);
        return self.roots[x];
    }

    pub fn union(&mut self, x: usize, y:usize) {
        let root_x = self.find(x);
        let root_y = self.find(y);

        if root_x == root_y {
            return;
        }
        self.count -= 1;
        let x_rank = self.rank[root_x];
        let y_rank = self.rank[root_y];

        if x_rank > y_rank {
            self.roots[root_y] = root_x;
        } else if y_rank > x_rank {
            self.roots[root_x] = root_y;
        } else {
            self.roots[root_x] = root_y;
            self.rank[root_y] += 1;
        }
    }
}