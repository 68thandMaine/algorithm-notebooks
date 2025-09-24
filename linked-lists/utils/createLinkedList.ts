// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Helper: build a linked list from an array
export function buildList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper: convert linked list back to array (for easy checking)
export function listToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

// --- Example Mock Data ---

// Example 1
export const example1_head = buildList([1, 2, 3, 4, 5]);
export const example1_n = 2; // expected output [1,2,3,5]

// Example 2
export const example2_head = buildList([1]);
export const example2_n = 1; // expected output []

// Example 3
export const example3_head = buildList([1, 2]);
export const example3_n = 1; // expected output [1]

// Example 4: Empty list
export const emptyList = null;

// Example 5: List with zeros
export const listWithZeros = buildList([0, 1, 0, 2, 0]);

// Example 6: Large numbers
export const largeNumbersList = buildList([999, 888, 777]);
