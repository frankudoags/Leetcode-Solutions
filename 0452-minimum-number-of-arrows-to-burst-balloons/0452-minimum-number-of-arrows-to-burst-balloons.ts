/**
Greedy
sort the points array from lowest to highest across x-axis,
keep track of arrows used and index of already burst ballons.
Start from first, and run greedy, burst as many as you can,
move on and ensure you never burst an already burst ballon.
return arrows.
*/
function findMinArrowShots(points: number[][]): number {
    if(points.length == 1) return 1
    points.sort((a,b) => a[1] - b[1]);
    let arrows = 0;
    const burst: Record<number, boolean> = {};
    
    for(let i = 0; i < points.length; i++){
        if(burst[i]) continue;
        let j = i + 1;
        while(j < points.length){
            if(points[i][1] >= points[j][0]){
                burst[j] = true;
                j++;
            } else {
                break
            }
        }
        arrows++
    }
    return arrows
};