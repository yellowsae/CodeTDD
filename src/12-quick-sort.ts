/**
 * @description 快速排序
 */

/**
 * 快速排序
 */

export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const left: number[] = [];
  const right: number[] = [];
  // const midIndex: number = Math.floor(arr.length / 2);
  // const midValue = arr.splice(midIndex, 1)[0];
  const midValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < midValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(midValue, quickSort(right));
}

export function quickSort2(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const left: number[] = [];
  const right: number[] = [];

  // 取数组中间下标
  const midIndex: number = Math.floor(arr.length / 2);
  // 使用 splice 方法删除数组中间下标的元素，并返回被删除的元素
  const midValue = arr.splice(midIndex, 1)[0];

  for (const element of arr) {
    if (element < midValue) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return quickSort(left).concat(midValue, quickSort(right));
}
