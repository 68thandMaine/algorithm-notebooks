// Quick Reference: Loop Types in TypeScript/JavaScript

// =====================================================
// ARRAY ITERATION PATTERNS
// =====================================================

const numbers = [10, 20, 30, 40, 50];
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];

// ✅ TRADITIONAL FOR LOOP - Best for arrays when you need index
console.log("=== Traditional For Loop ===");
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}

// ✅ FOR...OF LOOP - Best for arrays when you need values
console.log("\n=== For...Of Loop ===");
for (const num of numbers) {
  console.log(`Value: ${num}`);
}

// ✅ FOREACH - Functional approach
console.log("\n=== ForEach ===");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// ✅ MAP/FILTER - When you need to transform data
console.log("\n=== Map/Filter ===");
const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Doubled:", doubled);
console.log("Evens:", evens);

// =====================================================
// OBJECT ITERATION PATTERNS
// =====================================================

const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  active: true,
};

// ✅ FOR...IN - Best for objects
console.log("\n=== For...In Loop ===");
for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}

// ✅ OBJECT.ENTRIES - Modern object iteration
console.log("\n=== Object.entries ===");
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// ✅ OBJECT.KEYS/VALUES - When you only need keys or values
console.log("\n=== Object.keys/values ===");
Object.keys(user).forEach((key) => console.log(`Key: ${key}`));
Object.values(user).forEach((value) => console.log(`Value: ${value}`));

// =====================================================
// PERFORMANCE COMPARISON
// =====================================================

function benchmarkLoops() {
  const largeArray = Array.from({ length: 10000 }, (_, i) => i);

  // Traditional for loop
  console.log("\n=== Performance Test ===");
  const start1 = performance.now();
  for (let i = 0; i < largeArray.length; i++) {
    // Do nothing, just iterate
  }
  const end1 = performance.now();

  // For...of loop
  const start2 = performance.now();
  for (const item of largeArray) {
    // Do nothing, just iterate
  }
  const end2 = performance.now();

  // For...in loop
  const start3 = performance.now();
  for (const key in largeArray) {
    // Do nothing, just iterate
  }
  const end3 = performance.now();

  console.log(`Traditional for: ${(end1 - start1).toFixed(3)}ms`);
  console.log(`For...of: ${(end2 - start2).toFixed(3)}ms`);
  console.log(`For...in: ${(end3 - start3).toFixed(3)}ms`);

  // Show the ratio
  const forInRatio = (end3 - start3) / (end1 - start1);
  console.log(
    `For...in is ${forInRatio.toFixed(1)}x slower than traditional for`
  );
}

// =====================================================
// COMMON MISTAKES TO AVOID
// =====================================================

function demonstrateMistakes() {
  console.log("\n=== Common Mistakes ===");

  // ❌ MISTAKE 1: Using for...in with arrays
  console.log("❌ Wrong: for...in with array");
  const arr = [1, 2, 3];
  for (const index in arr) {
    console.log(`Type of index: ${typeof index}`); // Always "string"
    console.log(`Index: ${index}`); // "0", "1", "2"
  }

  // ❌ MISTAKE 2: Modifying array during iteration without index adjustment
  console.log("\n❌ Wrong: Modifying array without index adjustment");
  const nums = [1, 2, 3, 4, 5];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums.splice(i, 1); // Removes element, but doesn't adjust i!
      // This skips the next element!
    }
  }

  // ✅ CORRECT: Adjust index when modifying
  console.log("\n✅ Correct: Adjust index when modifying");
  const nums2 = [1, 2, 3, 4, 5];
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] % 2 === 0) {
      nums2.splice(i, 1);
      i--; // Adjust index to avoid skipping
    }
  }
  console.log("Corrected array:", nums2);
}

// =====================================================
// ALGORITHM EXAMPLES
// =====================================================

function algorithmExamples() {
  console.log("\n=== Algorithm Examples ===");

  // Two Sum with traditional for (need indices)
  function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

  // Finding duplicates with Map (better than nested loops)
  function findDuplicates(nums: number[]): number[] {
    const seen = new Map<number, number>();
    const duplicates: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (seen.has(num)) {
        if (seen.get(num) === 1) {
          // First time seeing duplicate
          duplicates.push(num);
        }
        seen.set(num, seen.get(num)! + 1);
      } else {
        seen.set(num, 1);
      }
    }

    return duplicates;
  }

  console.log("Two Sum result:", twoSum([2, 7, 11, 15], 9));
  console.log(
    "Duplicates in [1,2,3,2,4,1]:",
    findDuplicates([1, 2, 3, 2, 4, 1])
  );
}

// =====================================================
// RUN EXAMPLES
// =====================================================

console.log("=== LOOP CHEATSHEET DEMO ===");

// Run all examples
benchmarkLoops();
demonstrateMistakes();
algorithmExamples();

export {};

