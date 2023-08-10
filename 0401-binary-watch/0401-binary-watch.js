/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let times = [];
    for(let h = 0; h < 12; h++){
        for(let m = 0; m < 60; m++){
          let hours = h.toString(2).replace(/0/g, "");
          let mins = m.toString(2).replace(/0/g, "");
            if((hours + mins).length == turnedOn){
                times.push(`${Number(h)}:${m.toString().padStart(2,"0")}`)
            }
        }
    }
    
    return times;
};