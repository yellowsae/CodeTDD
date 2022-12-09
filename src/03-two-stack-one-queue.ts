/**
 * description: 用两个栈实现一个队列
 * author: yellowsea
 */

export class MyQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  // add 方法
  add(n: number) {
    this.stack1.push(n);
  }

  // delete 方法
  delete(): number | null {
    const stack1: number[] = this.stack1;
    const stack2: number[] = this.stack2;
    let res: number | null = null;
    // 1. 把 stack1 pop() 到 stack2
    while (stack1.length > 0) {
      const n: number = stack1.pop();
      stack2.push(n);
    }

    // 2. 在 stack2 pop()
    res = stack2.pop();
    // 3. 把 stack2 元素还给 stack1
    while (stack2.length > 0) {
      const n: number = stack2.pop();
      stack1.push(n);
    }
    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }
}

/**
 * 性能分析：
 * add 方法：O(1)
 * delete 方法：O(n)
 * 整体：O(n)   n 为数据的长度
 */

// 测试
// const q = new MyQueue();
// console.log(q.delete());
// q.add(1);
// q.add(2);
// q.add(3);
// console.log(q.length);
// console.log(q.delete());
// console.log(q.delete());
