// Algorithm-focused comparison: When to use Hash vs Map
// This shows practical algorithmic scenarios

// SCENARIO 1: Simple numeric key-value mapping (Hash wins)
function findDuplicateNumbersHash(arr: number[]): number[] {
  const seen: { [key: number]: boolean } = {};
  const duplicates: number[] = [];

  for (const num of arr) {
    if (seen[num]) {
      if (!duplicates.includes(num)) {
        duplicates.push(num);
      }
    } else {
      seen[num] = true;
    }
  }

  return duplicates;
}

// SCENARIO 2: Complex key storage (Map wins)
function groupAnagramsMap(words: string[]): string[][] {
  const anagramMap = new Map<string, string[]>();

  for (const word of words) {
    // Use sorted word as key (this would be problematic with object keys)
    const sorted = word.split("").sort().join("");

    if (!anagramMap.has(sorted)) {
      anagramMap.set(sorted, []);
    }

    anagramMap.get(sorted)!.push(word);
  }

  return Array.from(anagramMap.values());
}

// SCENARIO 3: Object keys (Map required)
function cacheResults<T>(): Map<object, T> {
  return new Map<object, T>();
}

function memoizeWithObjectKeys<T extends any[], R>(
  fn: (...args: T) => R
): (...args: T) => R {
  const cache = new Map<T, R>();

  return (...args: T): R => {
    // Object keys work perfectly here
    if (cache.has(args)) {
      return cache.get(args)!;
    }

    const result = fn(...args);
    cache.set(args, result);
    return result;
  };
}

// SCENARIO 4: Frequent insertions/deletions (Map wins)
function slidingWindowMaximumMap(nums: number[], k: number): number[] {
  const result: number[] = [];
  const windowMap = new Map<number, number>(); // value -> count

  // Initialize first window
  for (let i = 0; i < k; i++) {
    const count = windowMap.get(nums[i]) || 0;
    windowMap.set(nums[i], count + 1);
  }

  result.push(Math.max(...Array.from(windowMap.keys())));

  // Slide window
  for (let i = k; i < nums.length; i++) {
    // Remove outgoing element
    const outgoing = nums[i - k];
    const outgoingCount = windowMap.get(outgoing)!;
    if (outgoingCount === 1) {
      windowMap.delete(outgoing);
    } else {
      windowMap.set(outgoing, outgoingCount - 1);
    }

    // Add incoming element
    const incoming = nums[i];
    const incomingCount = windowMap.get(incoming) || 0;
    windowMap.set(incoming, incomingCount + 1);

    result.push(Math.max(...Array.from(windowMap.keys())));
  }

  return result;
}

// SCENARIO 5: JSON serialization needs (Hash wins)
function createSerializableCache() {
  const cache: { [key: string]: any } = {};

  return {
    set: (key: string, value: any) => {
      cache[key] = value;
    },
    get: (key: string) => cache[key],
    toJSON: () => cache, // Easy serialization
    size: () => Object.keys(cache).length,
  };
}

// SCENARIO 6: Mixed types as keys (Map wins)
function multiTypeCache() {
  const cache = new Map<any, string>();

  // Can mix different key types
  cache.set("string", "string value");
  cache.set(42, "number value");
  cache.set({ id: 1 }, "object value");
  cache.set(Symbol("test"), "symbol value");
  cache.set(true, "boolean value");

  return cache;
}

// PERFORMANCE BENCHMARKS
function benchmarkPerformance() {
  console.log("=== PERFORMANCE BENCHMARKS ===");

  const iterations = 100000;

  // Test 1: Simple string keys
  console.log("\n1. Simple string keys:");
  {
    const objStart = performance.now();
    const obj: { [key: string]: number } = {};
    for (let i = 0; i < iterations; i++) {
      obj[`key${i}`] = i;
    }
    const objEnd = performance.now();

    const mapStart = performance.now();
    const map = new Map<string, number>();
    for (let i = 0; i < iterations; i++) {
      map.set(`key${i}`, i);
    }
    const mapEnd = performance.now();

    console.log(`Object: ${(objEnd - objStart).toFixed(2)}ms`);
    console.log(`Map: ${(mapEnd - mapStart).toFixed(2)}ms`);
  }

  // Test 2: Object keys
  console.log("\n2. Object keys:");
  {
    const mapStart = performance.now();
    const map = new Map<object, number>();
    for (let i = 0; i < iterations; i++) {
      map.set({ id: i }, i);
    }
    const mapEnd = performance.now();

    console.log(`Map with objects: ${(mapEnd - mapStart).toFixed(2)}ms`);
    console.log(
      "Object approach would convert keys to strings - not equivalent"
    );
  }
}

// USAGE RECOMMENDATIONS
function getUsageRecommendations() {
  console.log("\n=== USAGE RECOMMENDATIONS ===");

  const recommendations = [
    {
      scenario: "Simple string/number keys with basic operations",
      recommendation: "HASH (Object)",
      reason: "Better performance, simpler syntax, JSON serializable",
    },
    {
      scenario: "Complex keys (objects, arrays, symbols)",
      recommendation: "MAP",
      reason: "Preserves key types, no string conversion",
    },
    {
      scenario: "Frequent insertions/deletions",
      recommendation: "MAP",
      reason: "Better performance for mutations, clear methods",
    },
    {
      scenario: "Need to iterate over entries frequently",
      recommendation: "MAP",
      reason: "Clean iteration without prototype properties",
    },
    {
      scenario: "Memory-constrained environments",
      recommendation: "HASH (Object)",
      reason: "Lower memory overhead for simple use cases",
    },
    {
      scenario: "Need predictable iteration order",
      recommendation: "MAP",
      reason: "Maintains insertion order (ES2015+)",
    },
    {
      scenario: "JSON serialization required",
      recommendation: "HASH (Object)",
      reason: "Maps are not JSON serializable by default",
    },
  ];

  recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec.scenario}`);
    console.log(`   → Use ${rec.recommendation}`);
    console.log(`   → Why: ${rec.reason}\n`);
  });
}

// Run demonstrations
console.log("=== HASH vs MAP: ALGORITHM COMPARISON ===");

// Test cases
const duplicateTest = [1, 2, 3, 2, 4, 1, 5, 3];
const anagramTest = ["eat", "tea", "tan", "ate", "nat", "bat"];
const slidingTest = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

// Execute examples
console.log("Find duplicates (Hash):", findDuplicateNumbersHash(duplicateTest));
console.log("Group anagrams (Map):", groupAnagramsMap(anagramTest));
console.log(
  "Sliding window max (Map):",
  slidingWindowMaximumMap(slidingTest, k)
);

benchmarkPerformance();
getUsageRecommendations();

export {};

