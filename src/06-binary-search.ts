/**
 * @description 二分查找
 * @author yellowsea
 */

/**
 * @description 二分查找 - 循环
 * @param arr arr
 * @param target target
 * @returns index
 */
export function binarySearch1(arr: number[], target: number): number {
  const length = arr.length;
  if (length === 0) return -1;
  let startIndex = 0; // 开始的索引
  let endIndex = length - 1; // 结束的索引

  // 当 start < end 时， 进行循环
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2); // 中间的索引
    const element: number = arr[midIndex];
    if (element < target) {
      // 二分
      startIndex = midIndex + 1;
    } else if (element > target) {
      // 二分
      endIndex = midIndex - 1;
    } else {
      // 相等
      return midIndex;
    }
  }
  return -1;
}

/**
 * @description 二分查找 - 递归
 * @param arr arr
 * @param target target
 * @param startIndex startIndex
 * @param endIndex endIndex
 * @returns index
 */
export function binarySearch2(
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
) {
  const length = arr.length;
  if (length === 0) return -1;

  // 定义开始 & 结束的范围
  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = length - 1;

  // 如果 start & end 相遇，则结束
  if (startIndex > endIndex) return -1;

  // 中间位置
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];

  if (midValue < target) {
    // 递归
    return binarySearch2(arr, target, midIndex + 1, endIndex);
  } else if (midValue > target) {
    // 递归
    return binarySearch2(arr, target, startIndex, midIndex - 1);
  } else {
    // 相等
    return midIndex;
  }
}

// 功能测试
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const target = 50;
// const index = binarySearch2(arr, target);
// console.log(index);

// 循环 & 递归 那个更好呢？
// 1. 递归的代码更简洁
// 2. 循环的性能更好
// 4. 循环的代码更容易理解

/**
 * 时间复杂度： O(logn)
 */
