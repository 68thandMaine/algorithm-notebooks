// Demo file showing how to use the pretty printing utilities
import {
  buildList,
  example1_head,
  example2_head,
  example3_head,
  emptyList,
  listWithZeros,
  largeNumbersList,
} from "./createLinkedList.ts";

import {
  linkedListToString,
  linkedListToChain,
  prettyPrintLinkedList,
  prettyPrintLinkedListChain,
  debugLinkedList,
} from "./prettyPrintLinkedList.ts";

// Example usage in your algorithm files:

console.log("=== Linked List Pretty Printing Demo ===\n");

// 1. Basic array-style formatting
console.log("1. Array-style formatting:");
console.log("   Empty list:", linkedListToString(emptyList));
console.log("   Example 1:", linkedListToString(example1_head));
console.log("   Example 2:", linkedListToString(example2_head));
console.log("   With zeros:", linkedListToString(listWithZeros));

// 2. Chain-style formatting (more visual)
console.log("\n2. Chain-style formatting:");
console.log("   Empty list:", linkedListToChain(emptyList));
console.log("   Example 1:", linkedListToChain(example1_head));
console.log("   Example 2:", linkedListToChain(example2_head));
console.log("   With zeros:", linkedListToChain(listWithZeros));

// 3. Console pretty printing
console.log("\n3. Console pretty printing:");
prettyPrintLinkedList(example1_head, "Example 1");
prettyPrintLinkedList(example2_head, "Example 2");
prettyPrintLinkedList(emptyList, "Empty List");
prettyPrintLinkedList(listWithZeros, "List with Zeros");

// 4. Chain-style console printing
console.log("\n4. Chain-style console printing:");
prettyPrintLinkedListChain(example1_head, "Example 1");
prettyPrintLinkedListChain(example2_head, "Example 2");
prettyPrintLinkedListChain(emptyList, "Empty List");
prettyPrintLinkedListChain(listWithZeros, "List with Zeros");

// 5. Detailed debugging info
console.log("\n5. Detailed debugging info:");
debugLinkedList(example1_head, "Example 1");
debugLinkedList(emptyList, "Empty List");
debugLinkedList(listWithZeros, "List with Zeros");

// 6. How to use in your algorithm solutions:
console.log("\n6. Usage in algorithm solutions:");
console.log("   // Instead of just:");
console.log("   // return result;");
console.log("   ");
console.log("   // You can do:");
console.log('   // console.log("Input 1:", linkedListToString(l1));');
console.log('   // console.log("Input 2:", linkedListToString(l2));');
console.log('   // prettyPrintLinkedList(result, "Result");');
console.log("   // return result;");
console.log("   ");
console.log("   // Or for quick debugging:");
console.log('   // debugLinkedList(result, "Final Result");');
