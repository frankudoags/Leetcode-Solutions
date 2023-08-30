use std::collections::HashMap;

impl Solution {
    pub fn num_of_minutes(n: i32, head_id: i32, manager: Vec<i32>, inform_time: Vec<i32>) -> i32 {
        let graph = Self::build_graph(&manager);
        
        Self::dfs(&head_id, &graph, &inform_time)
    }
    
    fn dfs(
        curr_id: &i32,
        graph: &HashMap<i32, Vec<i32>>,
        inform_time: &Vec<i32>
    ) -> i32 {   
        let mut max_mins = 0;
        
        if !graph.contains_key(curr_id){
            return max_mins;
        }
        for sub in &graph[curr_id] {
            max_mins = max_mins.max(
                inform_time[*curr_id as usize] +
                Self::dfs(
                sub,
                graph,
                inform_time
            ));
        }
        
        return max_mins;
    }
    
    fn build_graph(manager: &Vec<i32>) -> HashMap<i32, Vec<i32>> {
        let mut graph: HashMap<i32, Vec<i32>> = HashMap::new();
        for (key, value) in manager.iter().enumerate() {
            if *value != -1 {
                graph.entry(*value).or_insert(Vec::new()).push(key as i32);
            }
        }
        graph
    }
}

//2,2,4,6,-1,4,4,5 -> manager array
//0,1,2,3, 4,5,6,7 -> employees
