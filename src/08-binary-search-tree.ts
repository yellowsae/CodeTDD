/**
 * @description 二叉搜索树
 * @author yellowsea
 */

export interface ITreeNode {
  value: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

// 创建树
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

/**
 * 二叉树的前序遍历
 */
export function preOrderTraverse(tree: ITreeNode | null) {
  if (tree === null) return;
  preOrderTraverse(tree.left);
  preOrderTraverse(tree.right);
}

/**
 * 二叉树的中序遍历
 */
export const arr2: number[] = [];
export function inOrderTraverse(tree: ITreeNode | null) {
  if (tree === null) return;
  inOrderTraverse(tree.left);
  // console.log(tree.value);
  arr.push(tree.value);
  inOrderTraverse(tree.right);
}

/**
 * 二叉树的后序遍历
 */
export const arr3: number[] = [];
export function postOrderTraverse(tree: ITreeNode | null) {
  if (tree === null) return;
  postOrderTraverse(tree.left);
  postOrderTraverse(tree.right);
}

/**
 * @desc 求二叉树中第 K 小值
 * @param tree
 * @param k
 * @returns {number}
 */

export const arr: number[] = [];
export function getKthValue(tree: ITreeNode, k: number): number | null {
  // 中序遍历 - 得到 二叉树 | 二分思路
  inOrderTraverse(tree);
  return arr[k - 1] || null;
}
