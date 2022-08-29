var isHappy = function(n) {
    const visit = new Set();

    while (!visit.has(n)) {
        visit.add(n);
        n = sumOfSquares(n);

        if (n == 1) return true;
    }

    return false;
}

function sumOfSquares(n) {
    return n.toString().split('').reduce((acc, cur) => +acc + ((+cur)**2), 0);
}