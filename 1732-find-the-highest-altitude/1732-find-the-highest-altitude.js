/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let cur = 0; // 기준 고도 0
    let high = 0; 
    
    for(let i = 0; i < gain.length; i++) {
        cur += gain[i] // 배열 반복하면서 현재고도에 ++
        if(cur > high) {
            high = cur //저장된 최대높이값이 현재 고도보다 작으면 최대 높이에 할당 
        }
    }
    return high
};