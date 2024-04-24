def solution(n):
    answer = 0
    box = []
    for num in range(int(n/2)):
        if n % (num+1) == 0:
            box.append(num+1)
    box.append(n)
    answer = sum(box)
    return answer