import { describe, expect, test } from 'vitest';
import { matchBracket } from '../src/02-match-bracket';

describe('匹配括号', () => {
  test('正常匹配', () => {
    expect(matchBracket('()')).toBe(true);
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
