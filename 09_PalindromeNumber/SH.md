> # Palindrome Number
>
> https://leetcode.com/problems/palindrome-number/

Given an integer x, return true if x is a
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

<br/>

> # 나의 문제 풀이

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var result = Number(String(x).split("").reverse().join(""));

  if (result == x) {
    return true;
  } else {
    return false;
  }
};
```

<br/>

> # 참고

```js
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let t = 0;
  while (x > t) {
    t = t * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return t == x || x == Math.floor(t / 10);
};
```

string으로 변환하지 않고 수학으로만 푸는 풀이 방식.
