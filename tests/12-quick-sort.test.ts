import { describe, expect, it } from 'vitest';
import { quickSort, quickSort2 } from '../src/12-quick-sort';
describe('快速排序', () => {
  it('正常情况', () => {
    const arr = [1, 3, 2, 4, 9, 7, 4, 7, 5, 10];
    const res = quickSort(arr);
    const res2 = quickSort2(arr);
    expect(res).toEqual([1, 2, 3, 4, 4, 5, 7, 7, 9, 10]);
    expect(res2).toEqual([1, 2, 3, 4, 4, 5, 7, 7, 9, 10]);
  });

  it('有负数', () => {
    const arr = [1, -2, -3, 1, -1];
    const res = quickSort(arr);
    const res2 = quickSort2(arr);
    expect(res).toEqual([-3, -2, -1, 1, 1]);
    expect(res2).toEqual([-3, -2, -1, 1, 1]);
  });

  it('数组元素都一样', () => {
    const arr = [1, 1, 1, 1, 1];
    const res = quickSort(arr);
    const res2 = quickSort2(arr);
    expect(res).toEqual([1, 1, 1, 1, 1]);
    expect(res2).toEqual([1, 1, 1, 1, 1]);
  });

  it('空数组', () => {
    const arr: number[] = [];
    const res = quickSort(arr);
    const res2 = quickSort2(arr);
    expect(res).toEqual([]);
    expect(res2).toEqual([]);
  });
});
