function solution(arr, intervals) {
    var answer = [];
    const start = arr.slice(intervals[0][0],intervals[0][1]+1)
    const end = arr.slice(intervals[1][0],intervals[1][1]+1)
    answer = start.concat(end)

    return answer;
}