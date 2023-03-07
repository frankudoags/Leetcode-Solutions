function findRestaurant(list1: string[], list2: string[]): string[] {
    let map: Record<string, number> = {};
    let len1 = list1.length, len2 = list2.length;
    for(let i = 0; i < len1; i++){
        map[list1[i]] = i;
    }
    let result = [];
    let min = Infinity;
    for(let i = 0; i < len2; i++){
        if(map[list2[i]] !== undefined){
            if((map[list2[i]] + i) < min) {
                result= [list2[i]];
                min = map[list2[i]] + i;
            } else if(map[list2[i]] + i === min) {
                result.push(list2[i])
            }
        }
    }
    
    return result;    
};