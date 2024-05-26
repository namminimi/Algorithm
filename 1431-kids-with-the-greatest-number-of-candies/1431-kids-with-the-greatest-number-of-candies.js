/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(candy => {
        const sum = candy + extraCandies
        if(sum < max) {
            return false
        } else {
            return true
        }
    })
};