def solution(absolutes, signs):
    answer = 123456789
    new_array = []
    for i,num in enumerate(absolutes):
        print(i, num)
        if signs[i]:
            new_array.append(num)
        else:
            new_array.append(-num)
    answer = sum(new_array)
    return answer