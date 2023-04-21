/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let aha = n - 1;
    return function() {
        aha = aha + 1;
        return aha;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */