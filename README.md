# Algorithm Notebooks

A collection of algorithm solutions organized by data structures, implemented in TypeScript using Deno notebooks.

## Table of Contents

- [Setup](#setup)
- [Code Concepts](#code-concepts)
  - [Arrays](#arrays)
  - [Linked Lists](#linked-lists)
  - [Searching](#searching)
  - [Sorting](#sorting)
  - [Strings](#strings)
- [Project Structure](#project-structure)
- [File Naming Convention](#file-naming-convention)
- [Notebook Format](#notebook-format)
- [Running Notebooks](#running-notebooks)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [Resources](#resources)

## Code Concepts

### Arrays

| Chapter | Name |
|---------|------|
| 1 | [Two Sum](arrays/ch_1_two_sum.ipynb) |
| 2 | [Length of Longest Substring](arrays/ch_2_length_of_longest_substring.ipynb) |

### Linked Lists

| Chapter | Name |
|---------|------|
| 1 | [Add Two Numbers](linked-lists/ch_1_add_two_numbers.ipynb) |
| 2 | [Remove Nth Node From End of List](linked-lists/ch_2_remove_nth_node_from_end_of_list.ipynb) |
| 3 | [Linked List Cycle](linked-lists/ch_3_cycles.ipynb) |
| 4 | [Reverse Linked List](linked-lists/ch_4_reverse_linked_list.ipynb) |
| 5 | [Insertion Sort List](linked-lists/ch_5_inseration_sort.ipynb) |

### Searching

| Chapter | Name |
|---------|------|
| 1 | [Binary Search](searching/binary_search.ipynb) |

### Sorting

| Chapter | Name |
|---------|------|
| 1 | [Insertion Sort](sorting/insert_sort.ipynb) |
| 2 | [Merge Sorted Array](sorting/merge_sort.ipynb) |
| 3 | [Selection Sort](sorting/select_sort.ipynb) |

### Strings

| Chapter | Name |
|---------|------|
| 1 | [Longest Substring Without Repeating Characters](strings/longest_substring_without_repeating_chars.ipynb) |

## Setup

### Prerequisites

- [Deno](https://deno.com/) (version 1.28.0 or later)
- [Jupyter Notebook](https://jupyter.org/) or [JupyterLab](https://jupyterlab.readthedocs.io/)

### Installing Deno Kernel for Jupyter

1. Install the Deno kernel for Jupyter:
```bash
deno jupyter --install
```

2. Verify the installation:
```bash
jupyter kernelspec list
```

You should see `deno` in the list of available kernels.

### Alternative: Using Deno's Built-in Notebook Support

Deno also provides built-in notebook support:

```bash
deno notebook
```

This will start a notebook server that you can access through your browser.

## Project Structure

```
algorithm_notebooks/
├── README.md
├── linked-lists/
│   ├── README.md
│   ├── add_two_numbers.ipynb
│   ├── ch_1_add_two_numbers.ipynb
│   └── ch_2_remove_nth_node_from_end_of_list.ipynb
├── searching/
│   ├── README.md
│   └── binary_search.ipynb
└── sorting/
    ├── README.md
    ├── insert_sort.ipynb
    └── select_sort.ipynb
```

## File Naming Convention

- Use kebab-case for file names (e.g., `two-sum.ipynb`, `merge-intervals.ipynb`)
- Include the problem name or number when possible
- Each notebook should focus on a single problem or closely related problems

## Notebook Format

Each notebook should include:

1. **Problem Statement**: Clear description of the problem
2. **Examples**: Input/output examples
3. **Constraints**: Problem constraints
4. **Solution Approach**: Step-by-step reasoning
5. **TypeScript Implementation**: Clean, well-documented code
6. **Time/Space Complexity Analysis**: Big O notation
7. **Testing**: Example test cases

### Example Notebook Structure

```typescript
// Problem: Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9

function twoSum(nums: number[], target: number): number[] {
    // Implementation here
}
```

## Running Notebooks

### In Jupyter/JupyterLab

1. Start Jupyter:
```bash
jupyter lab
```

2. Open the desired notebook
3. Select the Deno kernel from the kernel menu
4. Execute cells as needed

### In Deno Notebook Server

1. Start the Deno notebook server:
```bash
deno notebook
```

2. Open the provided URL in your browser
3. Navigate to and open notebooks

## Best Practices

- Use TypeScript for type safety
- Include comprehensive test cases
- Document your thought process and approach
- Consider multiple solutions when applicable
- Analyze time and space complexity
- Use meaningful variable names
- Add comments for complex logic

## Contributing

1. Create a directory for the data structure if it doesn't exist
2. Add your notebook following the naming convention
3. Ensure your solution includes proper documentation
4. Test your code thoroughly

## Resources

- [LeetCode](https://leetcode.com/)
- [HackerRank](https://hackerrank.com/)
- [Deno Documentation](https://deno.com/manual)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
