/**
 * @description 链表实现队列
 * @author yellowsea
 */

export interface ILinkListNode {
  value: number;
  next: ILinkListNode | null;
}

/**
 * 链表实现队列
 * -  从 head 入队
 * - 从 tail 出队
 * - length 单独存储
 */
export class LinkListQueue {
  private head: ILinkListNode | null = null;
  private tail: ILinkListNode | null = null;
  private len = 0;

  /**
   * 入队， 在 tail 后面添加元素
   * @param n 入队列的元素
   */
  add(n: number) {
    const newNode: ILinkListNode = {
      value: n,
      next: null,
    };

    // 处理 head
    if (this.head == null) {
      // 当 head 为空时
      this.head = newNode;
    }

    // 处理 tail
    // 取出 tail
    const tailNode = this.tail;
    if (tailNode) {
      // 如果能取到 tail
      // 将 tail.next 指向 newNode
      tailNode.next = newNode;
    }

    // 如果 tail 为空， 则将 newNode 赋值给 tail
    // 和 head 一同指向 newNode
    this.tail = newNode;

    // 记录长度
    this.len++;
  }

  /**
   * 出队， 删除 head 元素
   * @returns 返回删除的元素
   */
  delete(): number | null {
    // 取出 head
    const headNode: ILinkListNode | null = this.head;
    if (headNode === null) return null;
    if (this.len <= 0) return null;

    // 取出出队的 值
    const value = headNode.value;

    // 处理 head 的指向
    this.head = headNode.next;

    // 处理长度
    this.len--;
    return value;
  }

  /**
   * 获取队列长度
   */
  get length(): number {
    // len 单独存储， 不能遍历链表获取长度，否则时间复杂度为 O(n)
    return this.len;
  }
}

/**
 * 空间复杂度： o(n)
 * add 时间复杂度： 链表 o(1)  数组 o(1)
 * delete 时间复杂度： 链表 o(1) 数组 o(n)
 */

// // 功能测试
// const q = new LinkListQueue();
// console.log(q.delete());
// q.add(100);
// q.add(200);
// q.add(300);
// console.log(q.delete());
// console.log(q.length);
// console.log(q.delete());
// console.log(q.length);
// console.log(q.delete());
// console.log(q.length);

// // 性能测试
// const q1 = new LinkListQueue();
// const start = Date.now();
// for (let i = 0; i < 10 * 10000; i++) {
//   q1.add(i); // 入队
// }
// for (let i = 0; i < 10 * 10000; i++) {
//   q1.delete(); // 出队
// }
// const end = Date.now();
// console.log('queue with list end', `${end - start}ms`); // 7ms

// // // 数组 实现队列
// const q2 = [];
// const start = Date.now();
// for (let i = 0; i < 10 * 10000; i++) {
//   q2.push(i); // 入队
// }
// for (let i = 0; i < 10 * 10000; i++) {
//   q2.shift(); // 出队
// }
// const end = Date.now();
// console.log('queue with list end', `${end - start}ms`); //  913ms
