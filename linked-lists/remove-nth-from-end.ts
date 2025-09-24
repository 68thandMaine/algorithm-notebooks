// Import linked list utilities from shared TypeScript module
import { ListNode, buildList, listToArray } from "./utils/createLinkedList.ts";

/**
 * Remove the nth node from the end of a linked list
 * @param head - Head of the linked list
 * @param n - Position from the end to remove (1-indexed)
 * @returns Head of the modified linked list
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Create a dummy node to handle edge cases
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  // Move fast pointer n+1 steps ahead
  for (let i = 0; i < n + 1; i++) {
    if (fast === null) return dummy.next; // n is larger than list length
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next; // slow is guaranteed to be non-null here
  }

  // Remove the nth node from the end
  if (slow!.next !== null) {
    slow!.next = slow!.next.next;
  }

  return dummy.next;
}

// --- Example Mock Data ---

// Example 1
const example1_head = buildList([1, 2, 3, 4, 5]);
const example1_n = 2; // expected output [1,2,3,5]

// Example 2
const example2_head = buildList([1]);
const example2_n = 1; // expected output []

// Example 3
const example3_head = buildList([1, 2]);
const example3_n = 1; // expected output [1]

// --- Test the Solution ---

// Test Example 1
const result1 = removeNthFromEnd(example1_head, example1_n);
console.log("Example 1 Result:", listToArray(result1)); // Should be [1,2,3,5]

// Test Example 2
const result2 = removeNthFromEnd(example2_head, example2_n);
console.log("Example 2 Result:", listToArray(result2)); // Should be []

// Test Example 3
const result3 = removeNthFromEnd(example3_head, example3_n);
console.log("Example 3 Result:", listToArray(result3)); // Should be [1]

// Export for testing
export { removeNthFromEnd };
