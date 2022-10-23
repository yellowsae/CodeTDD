/**
 * @description: 数组旋转
 * @author: yellowsea
 */

/**
 * @description: 数组旋转 K 步 - 使用 pop 和 unshift 方法
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]} arr
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length);
  // 1. 使用 pop 和 unshift 方法
  for (let i = 0; i < step; i++) {
    // @ts-ignore
    const n: number = arr.pop();
    if (n != null) {
      arr.unshift(n);
    }
  }
  return arr;
}

/**
 * @description: 数组旋转 K 步 - 使用 slice 和 concat 方法
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length);

  // 2. 使用 slice 和 concat 方法
  const part1 = arr.slice(-step); // 从后边取 step 个元素
  const part2 = arr.slice(0, length - step); // 从前边取 length - step 个元素
  const part3 = part1.concat(part2); // 数组拼接

  return part3;
}

// // 测试;
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log(rotate2(arr, k));
