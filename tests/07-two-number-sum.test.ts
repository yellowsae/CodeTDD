/**
 * @description 两数之和 test
 * @author yellowsea
 */
import { describe, expect, test } from 'vitest';
import { findTwoNumberSum1 } from '../src/07-two-number-sum';
describe('07-two-number-sum', () => {
  test('正常情况', () => {
    const arr = [2, 7, 4, 10];
    const n = 9;
    expect(findTwoNumberSum1(arr, n)).toEqual([2, 7]);
  });
  test('空数组', () => {
    const arr = [];
    const n = 9;
    expect(findTwoNumberSum1(arr, n)).toEqual([]);
  });
  test('找不到结果', () => {
    const arr = [2, 7, 4, 10];
    const n = 102;
    expect(findTwoNumberSum1(arr, n)).toEqual([]);
  });
});
