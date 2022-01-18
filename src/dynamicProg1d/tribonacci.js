/**
 * 1337. N-th tribonacci number
 * https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=leetcode-75
 * -------------------------------------------------------------------
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 * Example 1:
 *
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * Example 2:
 *
 * Input: n = 25
 * Output: 1389537
 *
 *
 * Constraints:
 *
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 *
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 * -------------------------------------------------------------------
 * @param {number} n
 * @return {number}
 */
let tribonacci = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let t = [0,1,1];

  for (let i = 3; i <= n; i++) {
    t[i] = t[i-3] + t[i-2] + t[i-1];
  }


  return t.pop();
};

console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(25));

/**
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
let tribonacciOptimised = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let a = 0;
  let b = 1;
  let c= 1;
  let d = a + b + c;
  if (n===3)
    return d;

  for (let i = 4; i <= n; i++) {
    a = b;
    b = c;
    c = d;
    d = a + b + c;
  }

  return d;
};

console.log(tribonacciOptimised(3));
console.log(tribonacciOptimised(4));
console.log(tribonacciOptimised(25));

