import { describe, expect, it } from 'vitest';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findPalindromeNumber,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findPalindromeNumber2,
  findPalindromeNumber3,
} from '../src/13-palindrome-number';
describe('回文数', () => {
  it('正常情况', () => {
    const res: number[] = findPalindromeNumber3(10);
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const res2: number[] = findPalindromeNumber3(200);
    expect(res2.length).toBe(28);
  });

  it('最大值为0', () => {
    const res: number[] = findPalindromeNumber3(0);
    expect(res).toEqual([]);
  });

  it('最大值为负数', () => {
    const res: number[] = findPalindromeNumber3(-1);
    expect(res).toEqual([]);
  });
});
