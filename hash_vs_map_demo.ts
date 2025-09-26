// Demonstration of Hash (Object) vs Map usage in TypeScript
// This file shows practical examples of when to use each

// 1. HASH/OBJECT APPROACH
console.log("=== HASH/OBJECT APPROACH ===");

// Simple key-value storage with string keys
const userCache: { [key: string]: { name: string; email: string } } = {};

// Adding entries
userCache["user123"] = { name: "John Doe", email: "john@example.com" };
userCache["user456"] = { name: "Jane Smith", email: "jane@example.com" };

// Checking existence (has to use 'in' operator)
console.log("user123 exists:", "user123" in userCache); // true

// Iterating over keys (all enumerable properties)
for (const userId in userCache) {
  console.log(`User ${userId}:`, userCache[userId]);
}

// Problem: Object keys are always converted to strings
const objKey = { id: 1 };
userCache[objKey] = { name: "Object Key", email: "obj@example.com" };
// This won't work as expected because objKey gets converted to [object Object]
console.log("Object as key:", Object.keys(userCache)); // ["[object Object]", "user123", "user456"]

// 2. MAP APPROACH
console.log("\n=== MAP APPROACH ===");

// Using Map for better key-value storage
const userMap = new Map();

// Can use any type as key
const userId1 = "user123";
const userId2 = { id: 456 }; // Object as key!
const userId3 = Symbol("user456"); // Symbol as key!

userMap.set(userId1, { name: "John Doe", email: "john@example.com" });
userMap.set(userId2, { name: "Jane Smith", email: "jane@example.com" });
userMap.set(userId3, { name: "Bob Wilson", email: "bob@example.com" });

// Built-in methods
console.log("Has user123:", userMap.has(userId1)); // true
console.log("Get user123:", userMap.get(userId1));

// Better iteration - only the map contents, not inherited properties
for (const [key, value] of userMap) {
  console.log("Key:", key, "Value:", value);
}

// 3. PERFORMANCE COMPARISON
console.log("\n=== PERFORMANCE COMPARISON ===");

// For simple string keys, objects can be faster for lookups
const iterations = 100000;

// Object performance
const startObj = performance.now();
const objLookup: { [key: string]: number } = {};
for (let i = 0; i < iterations; i++) {
  objLookup[`key${i}`] = i;
}
for (let i = 0; i < iterations; i++) {
  const val = objLookup[`key${Math.floor(iterations / 2)}`];
}
const endObj = performance.now();

console.log(`Object lookup time: ${(endObj - startObj).toFixed(2)}ms`);

// Map performance
const startMap = performance.now();
const mapLookup = new Map<string, number>();
for (let i = 0; i < iterations; i++) {
  mapLookup.set(`key${i}`, i);
}
for (let i = 0; i < iterations; i++) {
  const val = mapLookup.get(`key${Math.floor(iterations / 2)}`);
}
const endMap = performance.now();

console.log(`Map lookup time: ${(endMap - startMap).toFixed(2)}ms`);

// 4. ALGORITHM EXAMPLE: Two Sum Problem
console.log("\n=== ALGORITHM EXAMPLE: Two Sum ===");

// Hash approach (traditional, often preferred for simple cases)
function twoSumHash(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return [];
}

// Map approach (more explicit, better for complex keys)
function twoSumMap(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

// Test both approaches
const testNums = [2, 7, 11, 15];
const testTarget = 9;

console.log("Two Sum with Hash:", twoSumHash(testNums, testTarget));
console.log("Two Sum with Map:", twoSumMap(testNums, testTarget));

// 5. MEMORY USAGE COMPARISON
console.log("\n=== MEMORY USAGE ===");

// Objects have prototype chain overhead
const obj = { key1: "value1", key2: "value2" };
console.log("Object keys:", Object.keys(obj)); // enumerable properties only
console.log("Object has own property:", obj.hasOwnProperty("key1")); // true
console.log(
  "Object prototype properties:",
  Object.getOwnPropertyNames(Object.getPrototypeOf(obj))
); // many inherited properties

// Maps are cleaner - no prototype pollution
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log("Map size:", map.size);
console.log("Map contents are clean - no inherited methods in iteration");

export {};

