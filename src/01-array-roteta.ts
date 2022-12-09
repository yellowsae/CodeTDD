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
  // 取绝对值，防止 k 大于数组长度 & k 必须是正数
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

// 时间复杂度： O(n^2)  一个for循环 +  一个unshift
// 空间复杂度： O(1)  原地旋转  不需要额外的空间

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
  // const part3 = part1.concat(part2); // 数组拼接
  const part3 = [...part1, ...part2]; // 数组拼接

  return part3;
}

// 时间复杂度： O(1)  不需要循环
// 空间复杂度： O(n)  需要额外的空间   part3 数据量 为n

// // 测试;
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log(rotate2(arr, k));

// const arr1 = [];
// for (let i = 0; i < 10 * 10000; i++) {
//   arr1.push(i);
// }
// console.time('rotate1');
// rotate1(arr1, 9 * 10000);
// console.timeEnd('rotate1'); //  2.007s

// const arr2 = [];
// for (let i = 0; i < 10 * 10000; i++) {
//   arr2.push(i);
// }
// console.time('rotate2');
// rotate2(arr2, 9 * 10000);
// console.timeEnd('rotate2'); //  2.249ms
