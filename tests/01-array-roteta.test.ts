import { describe, expect, test } from 'vitest';
import { rotate1, rotate2 } from '../src/01-array-roteta';

describe('数组旋转K步', () => {
  test('正常情况', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    expect(rotate2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate1(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test('数组为空', () => {
    const arr = [];
    const k = 3;
    expect(rotate2(arr, k)).toEqual([]);
    expect(rotate1(arr, k)).toEqual([]);
  });

  test('K为0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    expect(rotate2(arr, k)).toEqual(arr);
    expect(rotate1(arr, k)).toEqual(arr);
  });

  test('K为负数', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = -3;
    expect(rotate2(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotate1(arr, k)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test('K不是数字', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 'abc';
    // @ts-ignore
    expect(rotate2(arr, k)).toEqual(arr);
    // @ts-ignore
    expect(rotate1(arr, k)).toEqual(arr);
  });
});
