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

// const arr = [2, 7, 4, 10];
// const n = 9;
// console.log(findTwoNumberSum1(arr, n));
