/**
 * @description 千分位格式化 (使用数组)
 * @author yellowsea
 */

/**
 * 思路1：
 *  - 把数字转为字符串, 再对字符串进行才分, reverse
 *  - 使用 reduce() 方法，对每隔三位进行才分
 * @parma num 数字
 * @returns {string} 千分位格式化后的字符串
 */

export function format1(n: number): string {
  n = Math.floor(n); // 只考虑整数

  const s: string = n.toString();
  const arr: string[] = s.split('').reverse();

  return arr.reduce((prev, curr, index) => {
    if (index % 3 === 0) {
      // 当在第三位时，加上 ','
      if (prev) {
        // 当 prev 不为空时，加上 ','
        // 拼接前后顺序颠倒 -> 因为循环的arr 是反转的
        return `${curr},${prev}`;
      } else {
        // 当 prev 为空时，直接返回 curr
        return curr;
      }
    } else {
      return `${curr}${prev}`;
    }
  }, ''); // 传入第一个参数 '' 作为初始值
}

/**
 *  千分位格式化后的字符串 - 字符思路
 * @param n 数字
 */
export function format2(n: number): string {
  n = Math.floor(n); // 只考虑整数

  const s: string = n.toString();
  let res = '';

  // 翻转循环
  for (let i = s.length - 1; i >= 0; i--) {
    // 获取截取到数字的长度
    const j = s.length - i;
    if (j % 3 === 0) {
      if (i === 0) {
        // 当 i 为 0 时，直接拼接
        res = s[i] + res;
      } else {
        // 当 i 不为 0 时，拼接 ','
        res = `,${s[i]}${res}`;
      }
    } else {
      res = s[i] + res;
    }
  }
  return res;
}
