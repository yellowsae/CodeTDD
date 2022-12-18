/**
 * @description 两数之和
 * @author yellowsea
 */

/**
 * @description 两数之和 - 嵌套循环
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
export function findTwoNumberSum1(arr: number[], n: number): number[] {
  const res: number[] = [];
  if (arr.length === 0) return res;
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        res.push(arr[i], arr[j]);
        break;
      }
    }
  }
  return res;
}

/**
 * @description 两数之和 - 双指针
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

// 时间复杂度 O(n)
export function findTwoNumberSum2(arr: number[], n: number): number[] {
  const res: number[] = [];
  if (arr.length === 0) return res;

  // 定义指针 i, j
  let i = 0; // 头指针
  let j = arr.length - 1; // 尾指针

  // 循环
  while (i < j) {
    const n1 = arr[i];
    const n2 = arr[j];
    const sum = n1 + n2;
    if (sum < n) {
      // 小于目标值，头指针右移
      i++;
    } else if (sum > n) {
      // 大于目标值，尾指针左移
      j--;
    } else {
      // 等于
      res.push(n1, n2);
      break;
    }
  }
  return res;
}

// const arr = [2, 7, 4, 10];
// const n = 9;
// arr.sort((a, b) => a - b);
// console.log(findTwoNumberSum2(arr, n));
