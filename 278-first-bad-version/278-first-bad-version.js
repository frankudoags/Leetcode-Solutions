/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(isBadVersion(0)) return 0;
        let l = 1, r = n;
        while(l < r) {
            let mid = Math.floor( (l + r) / 2);
            if(isBadVersion(mid)) {
                r = mid;
            }
            else {
                l = mid + 1;
            }
        }
        return l;
    };
};