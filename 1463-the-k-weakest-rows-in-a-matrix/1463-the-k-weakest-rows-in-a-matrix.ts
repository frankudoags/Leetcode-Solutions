function kWeakestRows(mat: number[][], k: number): number[] {
    let new_arr = [];
    for (let i = 0; i < mat.length; i++) {
        let arr = mat[i];
        let temp = arr.filter((elem) => elem != 0);
        new_arr.push({
            index: i,
            soldiers: temp.length
        });
    }


    new_arr.sort((a, b) => a.soldiers - b.soldiers);
    let ans = new_arr.map(elem => elem.index);
    console.log(ans);

    return ans.splice(0, k)
};