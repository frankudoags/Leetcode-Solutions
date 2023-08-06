/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let end = flowerbed.length;
    for (let i = 0; i < end; i++) {
        if(flowerbed[i] == 0){
          if(
              (i == 0 || (flowerbed[i - 1] == 0)) &&
              ((i == end - 1) || (flowerbed[i + 1] == 0))
          ) {
              flowerbed[i++] = 1;
              count++;
              if(count >= n) return true
          }
        }
    }
    
    return count >= n;
};