function minDeletionSize(strs: string[]): number {
    let counter = 0;
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 0; j < strs.length - 1; j++){
            if(strs[j][i].localeCompare(strs[j + 1][i]) > 0){
                counter++;
                break;
            }
        }
    }

    return counter
};