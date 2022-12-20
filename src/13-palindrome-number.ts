/**
 * @description 回文数
 * @author yellowsea
 */

/**
 * 思路：
 *  - 数字转为字符串，在转为数组
 *  - 数组反转 reverse() ， 再 join('') 转为字符串
 *  - 前后进行比较
 * @param max 最大值
 * @returns {number[]} 回文数数组
 */
export function findPalindromeNumber(max: number): number[] {
  const res: number[] = [];
  // 1 ~ max
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    // 把数字转为字符串，再转为数组，再反转，再转为字符串 ， 进行比较
    const s: string = i.toString();
    if (s === s.split('').reverse().join('')) {
      // 如果是回文数，就放入数组
      res.push(i);
    }
  }
  return res;
}

// console.log(findPalindromeNumber(100));

/**
 * 思路2 ： 字符串头尾进行比较
 *  - 数字转换为字符串
 *  - 字符串头尾进行比较
 *
 * @param max 最大值
 * @returns {number[]} 回文数数组
 */
export function findPalindromeNumber2(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    const s: string = i.toString();
    let left = 0; // 头
    let right: number = s.length - 1; // 尾
    let flag = true; // 是否是回文数

    // 当 left < right 时，进行比较
    while (left < right) {
      // 当头尾不相等时，不是回文数
      if (s[left] !== s[right]) {
        // 不是回文数，跳出循环
        flag = false;
        break;
      }
      // 相等时，头尾指针移动， 继续判断
      left++;
      right--;
    }
    if (flag) {
      res.push(i);
    }
  }
  return res;
}
// console.log(findPalindromeNumber2(100));

/**
 * 思路3 ： 数字反转
 *  - 使用 % 10 取出最后一位数字
 *  - 再使用 Math.floor() 生成翻转数
 *  - 前后数字进行对比
 */
export function findPalindromeNumber3(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let n: number = i; // 记录原始数字
    let rev = 0; // 生成的翻转数
    while (n > 0) {
      // 例如 123
      rev = rev * 10 + (n % 10); // 取余                0   3    32    321
      n = Math.floor(n / 10); // Math.floor() 向下取整  123   12  1   0
    }

    // 当原来的 i 和 rev 相等时，是回文数
    if (rev === i) {
      res.push(i);
    }
  }
  return res;
}
