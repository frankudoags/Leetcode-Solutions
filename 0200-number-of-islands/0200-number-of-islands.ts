function numIslands(grid: string[][]): number {
    //var to hold ans
    let count = 0;
    //get row and col of matrix
    let m = grid.length, n = grid[0].length;
    //helper array to store directions we can move in
    const helpers = [[0, -1], [-1, 0], [1, 0], [0, 1]];
    
    //recursively touch all connected islands and set to zero
    const dfs = (i: number, j: number) => {
        //breaker
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == "0") return; 
        //set land to water to avoid coming back to it
        grid[i][j] = "0"; 
        //loop around the land and connect other lands around it
        for(const helper of helpers){
            let _i = i + helper[0];
            let _j = j + helper[1];
            dfs(_i, _j);
        }
    };

    for( let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let element = grid[i][j];
            //find a land, and connect it to all lands around it, before moving on, forming
            //one big island
            if(element == "1"){
                count++;
                dfs(i , j);
            }
        }
    }

    return count;
};