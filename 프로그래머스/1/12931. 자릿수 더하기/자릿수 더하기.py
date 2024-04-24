def solution(n):
    answer = 0
    for num in f'{n}':
        answer += int(num)
    return answer