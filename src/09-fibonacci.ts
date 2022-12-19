/**
 * @description 斐波那契数列
 * @author yellowsea
 */

// 递归
/**
 * @description 斐波那契数列
 * @param {number} n
 * @returns {number}
 * @example 时间复杂度 O(2^n)
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * 动态规划解题
 * - 1. 确定状态： f(n) = f(n-1) + f(n-2)
 * - 时间复杂度 O(n)
 * @param n
 * @returns {number}
 */
export function fibonacci2(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

/**
 * 动态规划解题
 * - 1. 确定状态： f(n) = f(n-1) + f(n-2)
 * - 优化空间复杂度
 * @param n
 * @returns {number}
 */
export function fibonacci3(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let f1 = 0;
  let f2 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = f1;
    f1 = f2;
    f2 = temp + f2;
  }
  return f2;
}
