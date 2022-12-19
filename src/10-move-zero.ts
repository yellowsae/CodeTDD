/**
 * @description 移动零
 * @author yellowsea
 */

/**
 * 移动 0 到数组的末尾， 要求在原数组上操作
 * - 思路：
 *  - 遍历数组， 如果遇到 0
 *  -  就将 0 移动到数组的末尾
 *  - 用 splice 截取掉当前元素
 * @param arr
 * @returns {void}
 */
// 时间复杂度 O(n^2)
export function moveZero(arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;
  let zeroLength = 0; // 记录 0 的位置
  for (let i = 0; i < length - zeroLength; i++) {
    // O(n)
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1); // 本身就有 O(n) 的时间复杂度
      i--; // 数组截取了一个元素， i 需要减一 ， 否则连续 0 就会有报错
      zeroLength++;
    }
  }
}

/**
 * 双指针 解法
 * - 思路：
 *  - 用两个指针，一个指向 0， 一个指向非 0
 *  - 如果指向 0 的指针大于指向非 0 的指针，就交换两个指针的值
 * @param arr
 * @returns {void}
 */
export function moveZero2(arr: number[]): void {
  const length = arr.length;
  if (length === 0) return;
  let j = 0; // 指向 第一个 0
  let i; // 指向第一个 非0
  for (i = 0; i < length; i++) {
    if (arr[i] !== 0) {
      // 进行交换
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++; // 交换完成后， j 向后移动一位
    }
  }
}
