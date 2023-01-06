/**get total number of energy needed to win
    check if initial energy is not enough, if it isn't,
    add difference to answer, as one hour equals one unit energy
    given that we need to check experience level by level,
    check that our experience level is greater than current opponent,
    if no, get diff and train for (diff) hours(i.e add diff to answer)
    return ans
*/
function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    const energy_sum = energy.reduce((acc, cur) => acc + cur, 0) + 1;
    let ans = energy_sum - initialEnergy > 0 ? energy_sum - initialEnergy : 0;
    
    let exp = initialExperience;
    for (let i = 0; i < energy.length; i++) {
        if(experience[i] >= exp){
            ans += experience[i] - exp + 1;
            exp += experience[i] - exp + 1;
        }
        exp += experience[i];
    }
    return ans
};