/**
    use the slope to track if two points are on a straight line
    slope = dy/dx,
    for every two points, store the slope in a hashmap
    increment any repeated slope in the hashmap as those points are on a straight line
    compare maxpoint with hashmap values at the end of each iteration
    return maxPoint
*/
function maxPoints(points: number[][]): number {
    if (points.length == 1) return 1;
    let maxPoint = 0;
    for(let i = 0; i < points.length; i++){
        //hashmap to track, s to store temp slope
        const map: Record<number, number> = {};
        let s: number;
        for(let j =0; j < points.length; j++){
            if(i == j) continue;
            //get slope
            s = slope(points[i], points[j]);
            //check if slope is in hashmap, if yes increment, if no, store as 2
            //we store as two because we've found two points that have the same slope
            if(!map[s]) map[s] = 1;
                map[s] += 1;
        }
        //spread all values in map and compare for maximum with old max point
        maxPoint = Math.max(maxPoint, ...Object.values(map));
    }
    return maxPoint
};

//helper function to get slope
const slope = (a: number[], b:number[]): number => {
    if(a[0] === b[0]) return Number.MAX_VALUE;
    return (a[1] -b[1]) / (a[0] - b[0]);
}