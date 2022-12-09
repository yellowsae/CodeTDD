import { describe, expect, test } from 'vitest';
import { MyQueue } from './../src/03-two-stack-one-queue';
describe('两个栈实现一个队列', () => {
  test('add and length', () => {
    const q = new MyQueue();
    expect(q.length).toBe(0);

    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.length).toBe(3);
  });

  test('delete', () => {
    const q = new MyQueue();
    expect(q.delete()).toBeNull(); // null
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.delete()).toBe(100);
    expect(q.length).toBe(2);
    expect(q.delete()).toBe(200);
    expect(q.length).toBe(1);
  });
});
