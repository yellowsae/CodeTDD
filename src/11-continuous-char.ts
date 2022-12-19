/**
 * @description 求字符串中连续出现最多的字符和个数
 * @author yellowsea
 */

export interface IRes {
  char: string;
  length: number;
}

/**
 * 求连续最多的字符 和 次数 - 嵌套循环
 * O(n) 时间复杂度
 * @param str 字符串
 * @returns IRes
 */
export function findContinuousChar1(str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0,
  };

  const length: number = str.length;
  if (length === 0) return res;

  let tempLength = 0; // 记录临时变量

  // 1. 遍历字符串
  for (let i = 0; i < length; i++) {
    tempLength = 0; // 重置临时变量

    // j 从 i 开始，遍历字符串
    for (let j = i; j < length; j++) {
      // 前后 相等 则 计数
      if (str[i] === str[j]) {
        tempLength++;
      }
      // 前后 不相等 则 跳出循环
      if (str[i] !== str[j] || j === length - 1) {
        // 不相等，或者已经到最后一个字符。 要去判断最大值
        if (tempLength > res.length) {
          res.char = str[i];
          res.length = tempLength;
        }

        // 如果 i 还没有到最后一个字符，那么 i 要跳到 j 的位置
        if (i < length - 1) {
          i = j - 1; // 跳步
        }

        break;
      }
    }
  }

  return res;
}

/**
 * 求连续最多的字符 和 次数 - 双指针
 * 思路
 *  - 1. 指针 i, j;   j 不动 i 移动
 *  - 2. 如果 i 和 j 一直相等，则i继续移动
 *  - 3. 知道 i 和 j 不相等， 记录 i 和 j 之间的距离，当 j 追上 i。 继续第一步
 */

// O(n)
export function findContinuousChar2(str: string): IRes {
  const res: IRes = {
    char: '',
    length: 0,
  };

  const length: number = str.length;
  if (length === 0) return res;
  let tempLength = 0; // 记录临时变量

  // 定义双指针
  let i = 0;
  let j = 0;

  // 循环
  for (; i < length; i++) {
    // 如果 i 和 j 一直相等，则i继续移动
    if (str[i] === str[j]) {
      tempLength++; // 计数
    }

    if (str[i] !== str[j] || i === length - 1) {
      // 处理: 不相等，而且 i  已经到末尾了
      if (tempLength > res.length) {
        res.char = str[j];
        res.length = tempLength;
      }

      tempLength = 0; // 重置临时变量

      // 当 i 没有到末尾时
      if (i < length - 1) {
        // 让 j 跳到 i 的位置
        j = i;
        i--; // 跳步
      }
    }
  }

  return res;
}

// const str = 'aabbccdddeeeeeee111222222';
// const res = findContinuousChar2(str);
// console.log(res);
