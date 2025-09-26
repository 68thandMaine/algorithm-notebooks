// Demonstration: for...in vs traditional for loop in TypeScript/JavaScript

// 1. ARRAY ITERATION - The WRONG way (for...in)
console.log("=== ARRAY ITERATION - WRONG WAY ===");

const numbers = [10, 20, 30, 40, 50];

// ❌ DON'T DO THIS with arrays!
console.log("Using for...in with array:");
for (const num in numbers) {
  console.log(`Index ${num}: ${numbers[num]}`);
}
// Output: Index 0: 10, Index 1: 20, Index 2: 30, Index 3: 40, Index 4: 50

// This works, but it's problematic because:
console.log("\nProblems with for...in on arrays:");
console.log("1. Treats array as object, iterates over indices");
console.log("2. Indices are strings, not numbers");
console.log("3. Includes non-numeric properties");

// Demonstrate the string issue:
const arr = [1, 2, 3];
arr.customProperty = "This is bad!";
for (const key in arr) {
  console.log(`Key: ${key} (type: ${typeof key})`);
}
// Output: Key: 0 (type: string), Key: 1 (type: string), Key: 2 (type: string), Key: customProperty (type: string)

// 2. ARRAY ITERATION - The RIGHT way (traditional for loop)
console.log("\n=== ARRAY ITERATION - RIGHT WAY ===");

console.log("Using traditional for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}
// Output: Index 0: 10, Index 1: 20, Index 2: 30, Index 3: 40, Index 4: 50

console.log("\nUsing for...of (modern approach):");
for (const num of numbers) {
  console.log(`Value: ${num}`);
}
// Output: Value: 10, Value: 20, Value: 30, Value: 40, Value: 50

// 3. OBJECT ITERATION - The CORRECT use of for...in
console.log("\n=== OBJECT ITERATION - CORRECT USE ===");

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  email: "john@example.com",
};

console.log("Using for...in with object:");
for (const key in person) {
  console.log(`${key}: ${person[key as keyof typeof person]}`);
}
// Output: name: John Doe, age: 30, city: New York, email: john@example.com

// 4. PERFORMANCE COMPARISON
console.log("\n=== PERFORMANCE COMPARISON ===");

const largeArray = Array.from({ length: 100000 }, (_, i) => i);

console.log("Performance test - 100,000 iterations:");

// Traditional for loop
const startFor = performance.now();
let sumFor = 0;
for (let i = 0; i < largeArray.length; i++) {
  sumFor += largeArray[i];
}
const endFor = performance.now();

// for...in loop (don't do this with arrays!)
const startForIn = performance.now();
let sumForIn = 0;
for (const index in largeArray) {
  sumForIn += largeArray[Number(index)]; // Have to convert string to number!
}
const endForIn = performance.now();

// for...of loop (modern approach)
const startForOf = performance.now();
let sumForOf = 0;
for (const value of largeArray) {
  sumForOf += value;
}
const endForOf = performance.now();

console.log(`Traditional for loop: ${(endFor - startFor).toFixed(3)}ms`);
console.log(`for...in loop: ${(endForIn - startForIn).toFixed(3)}ms`);
console.log(`for...of loop: ${(endForOf - startForOf).toFixed(3)}ms`);

// 5. EDGE CASES AND GOTCHAS
console.log("\n=== EDGE CASES ===");

// Sparse arrays
console.log("Sparse array behavior:");
const sparseArray = [1, , 3, , 5]; // Array with holes
console.log("Array length:", sparseArray.length);
console.log(
  "Actual elements:",
  sparseArray.filter((x) => x !== undefined).length
);

console.log("for...in on sparse array:");
for (const index in sparseArray) {
  console.log(`Index ${index}: ${sparseArray[index]}`);
}

console.log("Traditional for on sparse array:");
for (let i = 0; i < sparseArray.length; i++) {
  console.log(`Index ${i}: ${sparseArray[i]}`);
}

// Array with prototype extensions
console.log("\nArray with custom prototype method:");
Array.prototype.customMethod = function () {
  console.log("This is a custom method!");
};

const customArray = [1, 2, 3];
console.log("for...in includes prototype properties:");
for (const key in customArray) {
  console.log(
    `Key: ${key}, Value: ${customArray[key]}, Is array element: ${Array.isArray(
      customArray[key]
    )}`
  );
}

// 6. WHEN TO USE EACH LOOP TYPE
console.log("\n=== RECOMMENDATIONS ===");

// ✅ Use for...in for:
console.log("✅ Use for...in for:");
console.log("  - Iterating over object properties");
console.log("  - When you need property names (keys)");
console.log("  - Working with object literals or plain objects");

// ❌ Never use for...in for:
console.log("\n❌ Never use for...in for:");
console.log("  - Arrays (use for, for...of, or forEach instead)");
console.log("  - When performance matters");
console.log("  - When you need guaranteed order");

// ✅ Use traditional for for:
console.log("\n✅ Use traditional for for:");
console.log("  - Arrays when you need the index");
console.log("  - Performance-critical code");
console.log("  - When you need to modify the array during iteration");
console.log("  - Skipping elements or custom increment logic");

// ✅ Use for...of for:
console.log("\n✅ Use for...of for:");
console.log("  - Arrays when you only need values");
console.log("  - Readability and modern code");
console.log("  - Iterables (Maps, Sets, etc.)");

export {};

