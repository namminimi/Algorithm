function solution(elements) {
    var answer = 0;
    const extendsElements = elements.concat(elements)
    const nums = new Set();
    for(let i = 0; i < elements.length; i++) {
        for(let j=1; j <= elements.length; j++) {
            let sum = 0
            for(let k = i; k < i + j; k++) {
                sum += extendsElements[k]
                  //console.log(k, elements[k])
            }
            nums.add(sum)
        }
    }
   // console.log(nums)
    answer = nums.size
    return answer;
}