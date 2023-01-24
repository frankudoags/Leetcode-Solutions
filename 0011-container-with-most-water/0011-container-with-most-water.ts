function maxArea(height: number[]): number {
    let max_area = 0, a = 0, b = height.length - 1;
    while(a < b){
        let temp_area = Math.min(height[a], height[b])*(b-a);
        max_area = Math.max(temp_area, max_area);
        if(height[a] <= height[b]){
            a++;
        } else {
            b--;
        }
    }
    return max_area;
};