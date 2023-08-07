/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const price = 5;
    let map = {}; map[price] = 0; map[10] = 0;
    
    for(let i = 0; i < bills.length; i++){
        if (bills[i] == price) {
            map[price]++;
            continue;
        }
        let change = bills[i] - price;
        
        //when change is $5
        if(change == price) {
            if(!map[price]) return false;
            map[price]--;
            map[bills[i]]++;
            continue;
        }
        else //when change is $15
        {
            //if we have $10 and $5
            if(map[10] && map[5]){
                map[10]--; map[5]--;
                continue;
            }
            //if we have 3 notes of $5
            else if(map[5] >= 3) {
                map[5] -= 3;
                continue;
            }
            // no change
            else {
                return false;
            }
         }
        
    }
    return true
};