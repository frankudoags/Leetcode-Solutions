use std::collections::{HashMap, HashSet};

#[derive(Debug)]
struct Edge {
    node: String,
    val: f64
}

impl Solution {
    pub fn calc_equation(equations: Vec<Vec<String>>, values: Vec<f64>, queries: Vec<Vec<String>>) -> Vec<f64> {
        //build out the Graph from the equations and their values
        let graph = Self::build_graph(equations, values);
        //mutable dynamic vector to hold answers
        let mut res: Vec<f64> = Vec::with_capacity(queries.len());

        //for each query

        let mut visited = HashSet::new();

        for q in queries {
            //check to be sure both values in the query are in the graph, else 
            // store -1.0 for that query
            if !graph.contains_key(&q[0]) || !graph.contains_key(&q[1]) {
                res.push(-1.0);
                continue;
            }
            //get the resulting value from `get_answer` function and push it into
            // the `res` vector
            res.push(Self::dfs(&q[0], &q[1], &mut visited, &graph));
            visited.clear();
        }
        
        //return the vector of answers
        return res;
    }
    
    //given a `query` and the address of a Graph, we want to find the result of
    // the query from the graph
    fn dfs(
        src: &str,
        dest: &str,
        visited: &mut HashSet<String>,
        graph: &HashMap<String, Vec<Edge>>)
        -> f64 {
            if src == dest {
                return 1.0;
            }
            if visited.contains(src){
                return -1.0;
            }
            visited.insert(src.to_string());

            for node in &graph[src] {
                let result = Self::dfs(&node.node, dest, visited, graph);
                if result != -1.0 {
                    return node.val * result;
                }
            }
            return -1.0;
    }



    fn build_graph(
        equations: Vec<Vec<String>>,
        values: Vec<f64>) ->
        HashMap<String, Vec<Edge>>
    {
        let mut g = HashMap::new();
        
        for i in 0..equations.len() {
            let src = equations[i][0].clone();
            let des = equations[i][1].clone();
            let value = values[i];
            //check graph if `src` exists, and create a new array in the graph
            //to hold its edges if it doesn't
            //then push `des` as an edge
            g.entry(src.clone())
            .or_insert(Vec::new())
            .push(
                Edge {
                    node: des.clone(),
                    val: value
                }
            );
            // same thing here, but when pushing `src` as an edge, we know from the
            //question that `src`/`des` == values[i]
            // hence `des`/`src` will be == 1.0 / values[i]
            //hence we store src as an edge for des, and the val to 1/values[i]
            g.entry(des.clone())
            .or_insert(Vec::new())
            .push(
                Edge {
                    node: src.clone(),
                    val: 1.0 / value
                }
            );

        }

        //we return the graph after building
            return g
    }
}

