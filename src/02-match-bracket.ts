/**
 * @description: 匹配括号
 * @author: yellowsea
 */

/**
 * @description : 判断扩号是否匹配
 * @param {string} str
 * @return {boolean}
 */
export function matchBracket(str: string): boolean {
  const length: number = str.length;
  if (length === 0) return true;

  // 1. 定义栈
  const stack: string[] = [];

  // 2. 定义左右括号
  const leftSymbol = '([{';
  const rightSymbol = ')]}';

  // 3. 遍历字符串
  for (let i = 0; i < length; i++) {
    const s: string = str[i];

    // 4. 判断是否为左括号
    if (leftSymbol.includes(s)) {
      // includes 不计空间复杂度计算
      // 左括号, 入栈
      stack.push(s);
    } else if (
      // 属于右括号
      rightSymbol.includes(s)
    ) {
      // 判断和 栈顶元素是否匹配
      const top: string = stack[stack.length - 1];
      if (isMatch(top, s)) {
        // 匹配成功
        // 出栈
        stack.pop();
      } else {
        // 匹配失败
        return false;
      }
    }
  }

  // 判断栈是否为空
  return stack.length === 0;
}

/**
 *
 * @param left 左括号
 * @param right 右括号
 * @returns Boolean
 */
function isMatch(left: string, right: string): boolean {
  if (left === '{' && right === '}') return true;
  if (left === '[' && right === ']') return true;
  if (left === '(' && right === ')') return true;
  return false;
}

// 测试
// const str = '{a(b[c(])]d)e}';
// console.log(matchBracket(str));

/**
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
