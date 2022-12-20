/**
 * @description 切换字母大小写
 * @author yellowsea
 */

/**
 * 切换字母大小写  （正则）
 */

export function switchLetterCase(str: string): string {
  let res = '';

  const length = str.length;
  if (length === 0) return res;

  // 定义整个
  const reg1 = /[a-z]/g;
  const reg2 = /[A-Z]/g;

  for (let i = 0; i < length; i++) {
    const char = str[i];

    if (reg1.test(char)) {
      // 转为大写
      res = res + char.toUpperCase();
    } else if (reg2.test(char)) {
      // 转为小写
      res = res + char.toLowerCase();
    } else {
      res = res + char;
    }
  }
  return res;
}

// const str = 'aBcD1eF33**#g';
// console.log(switchLetterCase(str));

/**
 * 切换字母大小写  （ASCII码）
 * @param str
 * @returns {string}
 */
export function switchLetterCase2(str: string): string {
  let res = '';

  const length = str.length;
  if (length === 0) return res;

  for (let i = 0; i < length; i++) {
    const c = str[i];
    const code = c.charCodeAt(0);

    // 65 - 90  A-Z
    if (code >= 65 && code <= 90) {
      res = res + c.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      // 97 - 122  a-z
      res = res + c.toUpperCase();
    } else {
      res = res + c;
    }
  }

  return res;
}
