/**
 * @desc 求二叉树中第 K 小值 test
 *
 */
import { describe, expect, it } from 'vitest';
import { getKthValue } from '../src/08-binary-search-tree';
import type { ITreeNode } from '../src/08-binary-search-tree';

describe('二叉树中第 K 小值', () => {
  const tree: ITreeNode = {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 7,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
  };

  it('正常情况', () => {
    const res = getKthValue(tree, 3);
    expect(res).toBe(4);
  });
  it('K 不在正常范围之内', () => {
    const res = getKthValue(tree, 1000);
    expect(res).toBeNull();
    const res2 = getKthValue(tree, 0);
    expect(res2).toBeNull();
  });
});
