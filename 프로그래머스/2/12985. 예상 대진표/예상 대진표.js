// 게임 차례 1 ~ n 번
// 1 vs 2, 3 vs 4, n vs 다음 n번
// 이긴 사람이 다음 라운드 진출
// 이기면 번호가 앞으로 떙겨짐 ex) 2번 이겼을 때 2번이 1번을 부여받음
// 최종 1명 남을 때까지 진행
//참가자 a랑 참가자 b 가 몇 번째 라운드에서 만나는지 
// 참가자 a 와 참가자 b는 붙기 전까지 항상 이김

// N = 참가자 수
// 1, 2, 3, 4, 5, 6, 7, 8
//   1,    2,    3,    4
//      1,          2

//짝수 번호의 경우: 2로 나누면 자연스럽게 다음 라운드의 번호
//홀수 번호의 경우: 2로 나눈 후 올림을 해야 다음 라운드의 번호가 되며 해당 참가자가 짝수 번호의 참가자와 경기를 한 뒤 다음 라운드로 진출한다는 것을 의미
function solution(n,a,b){
    var answer = 0;
    
    while (a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        console.log(a, b)
        answer++
    }
    
   
    return answer;
}