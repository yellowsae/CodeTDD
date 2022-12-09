import { describe, expect, test } from 'vitest';
import { matchBracket } from '../src/02-match-bracket';

describe('匹配括号', () => {
  test('正常匹配', () => {
    expect(matchBracket('()')).toBe(true);
    /**
     * 在测试用例中： 断言, 当判断为对象 & 数组时，会使用 deepEqual 比较
     *  - 当 判断数据为  布尔值 &  数字时  会使用  toBe 比较
     */
  });

  test('空字符串', () => {
    expect(matchBracket('')).toBe(true);
  });

  test('单个括号', () => {
    expect(matchBracket('(')).toBe(false);
  });

  test('多个括号', () => {
    expect(matchBracket('()[]{}')).toBe(true);
  });

  test('空字符串', () => {
    expect(matchBracket('')).toBe(true);
  });

  test('复杂字符串', () => {
    expect(matchBracket('{a(b[c(])]d)e}')).toBe(false);
  });
  test('复杂字符串', () => {
    expect(matchBracket('{a(b[c()]d)e}')).toBe(true);
  });
});
