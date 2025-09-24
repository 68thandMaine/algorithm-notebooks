// Pretty printing utilities for linked lists
import { ListNode } from "./createLinkedList.ts";

/**
 * Converts a linked list to a readable array-like string format
 * @param head - The head of the linked list
 * @returns String representation like "[1, 2, 3, 4, 5]"
 */
export function linkedListToString(head: ListNode | null): string {
  if (!head) return "[]";

  const values: number[] = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return `[${values.join(", ")}]`;
}

/**
 * Converts a linked list to a visual chain format
 * @param head - The head of the linked list
 * @returns String representation like "1 -> 2 -> 3 -> 4 -> 5"
 */
export function linkedListToChain(head: ListNode | null): string {
  if (!head) return "null";

  const values: string[] = [];
  let current = head;

  while (current) {
    values.push(current.val.toString());
    current = current.next;
  }

  return values.join(" -> ");
}

/**
 * Pretty prints a linked list to the console with formatting
 * @param head - The head of the linked list
 * @param label - Optional label to identify the list
 */
export function prettyPrintLinkedList(
  head: ListNode | null,
  label?: string
): void {
  const prefix = label ? `${label}: ` : "";

  if (!head) {
    console.log(`${prefix}[] (empty list)`);
    return;
  }

  const values: number[] = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  console.log(`${prefix}[${values.join(", ")}]`);
}

/**
 * Pretty prints a linked list in chain format to the console
 * @param head - The head of the linked list
 * @param label - Optional label to identify the list
 */
export function prettyPrintLinkedListChain(
  head: ListNode | null,
  label?: string
): void {
  const prefix = label ? `${label}: ` : "";

  if (!head) {
    console.log(`${prefix}null (empty list)`);
    return;
  }

  const chain = linkedListToChain(head);
  console.log(`${prefix}${chain}`);
}

/**
 * Detailed linked list information for debugging
 * @param head - The head of the linked list
 * @param label - Optional label to identify the list
 */
export function debugLinkedList(head: ListNode | null, label?: string): void {
  const prefix = label ? `${label}: ` : "";

  if (!head) {
    console.log(`${prefix}null (empty list)`);
    return;
  }

  console.log(`${prefix}Linked List:`);
  console.log(`  Length: ${linkedListToString(head)}`);
  console.log(`  Chain:  ${linkedListToChain(head)}`);

  // Show node-by-node details
  let current = head;
  let index = 0;

  while (current) {
    const nextVal = current.next ? current.next.val : "null";
    console.log(`  Node[${index}]: val=${current.val}, next=${nextVal}`);
    current = current.next;
    index++;
  }
}
