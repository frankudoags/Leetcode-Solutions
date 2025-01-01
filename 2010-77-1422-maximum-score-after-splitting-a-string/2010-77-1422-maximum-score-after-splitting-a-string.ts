function maxScore(s: string): number {
    let ones = [...s].filter(char => char === '1').length;
    let zeroes = 0;
    let max = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let char = s[i];
        if(char === '0') zeroes++;
        else ones--;

        max = Math.max(max, zeroes + ones);
    }

    return max
};