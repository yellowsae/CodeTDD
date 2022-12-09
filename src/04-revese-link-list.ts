/**
 * description: 反转链表 & 根据数组创建链表
 * author: yellowsea
 */

export interface ILinkListNode {
  value: number;
  next: ILinkListNode | null;
}

/**
 * description: 反转链表
 * @param  arr ListNode
 * @returns ListNode
 */

export function reverseLinkList(head: ILinkListNode): ILinkListNode {
  // 三个指针翻转链表
  let prev: ILinkListNode | null = null;
  let curr: ILinkListNode | null = null;
  let next: ILinkListNode | null = head;

  // 循环
  while (next) {
    // 第一个元素时 prev 为 null & curr 为 head
    if (!prev && curr) {
      // 删除 curr.next 指针
      delete curr.next;
    }

    // 翻转指针
    if (curr && prev) {
      curr.next = prev;
    }

    // 整体向后移动
    prev = curr;
    curr = next;
    next = next.next;
  }
  // 最后一个链表翻转的补充  当 next.next 为空， 此时 curr 尚未设置 next
  curr.next = prev;
  return curr;
}

/**
 * description: 根据数组创建链表
 */
export function createLinkList(arr: number[]): ILinkListNode {
  const length: number = arr.length;
  if (length === 0) throw new Error('arr is empty');

  /**
   * ：代码描述
   * { value: 500, next: null }
   * { value: 400, next: { value: 500, next: null } }
   * { value: 300, next: { value: 400, next: { value: 500, next: null } } }
   * { value: 200, next: { value: 300, next: { value: 400, next: { value: 500, next: null } } } }
   * { value: 100, next: { value: 200, next: { value: 300, next: { value: 400, next: { value: 500, next: null } } } } }
   */

  // 从尾部 创建节点
  let currNode: ILinkListNode = {
    value: arr[length - 1], // 最后的值
    next: null, // 最后的指针指向 null
  };

  // 当arr长度为1时，直接返回 创建的链表
  if (length === 1) return currNode;

  for (let i = arr.length - 2; i >= 0; i--) {
    // 从倒数第二个开始
    currNode = {
      value: arr[i], // 赋值当前循环的值
      next: currNode, // next 指针赋值为 上一个节点
    };
  }
  return currNode;
}

// const arr: number[] = [100, 200, 300, 400, 500];
// const reverseNode: ILinkListNode = createLinkList(arr);
// // console.log(reverseNode);
// console.log(reverseLinkList(reverseNode));
