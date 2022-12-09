import { describe, expect, test } from 'vitest';
import { createLinkList, reverseLinkList } from '../src/04-revese-link-list';
import type { ILinkListNode } from '../src/04-revese-link-list';
describe('单项链表', () => {
  test('创建链表', () => {
    const arr: number[] = [100, 200, 300];
    const node: ILinkListNode = createLinkList(arr);
    expect(node).toEqual({
      value: 100,
      next: {
        value: 200,
        next: {
          value: 300,
          next: null,
        },
      },
    });
  });

  test('翻转单个元素', () => {
    const node: ILinkListNode = { value: 100, next: null };
    const node1 = reverseLinkList(node);
    expect(node1).toEqual({ value: 100, next: null });
  });

  test('翻转多个链表', () => {
    const node = createLinkList([100, 200, 300]);
    const node1 = reverseLinkList(node);
    expect(node1).toEqual({
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100,
        },
      },
    });
  });
});
