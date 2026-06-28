// =============================================
// DSA ROADMAP DATA
// =============================================

const PHASES = [
  {
    id: "p0",
    name: "Phase 0 — C++ Foundations",
    days: "Days 1–7",
    color: "#f9c5d1",
    topics: ["Time Complexity", "Space Complexity", "Big O Notation", "Arrays & Functions", "References & Pointers", "STL: vector, pair, map", "STL: set, stack, queue, priority_queue"],
    problems: [
      { id: "p0-1", name: "Two Sum", lc: 1, diff: "easy" },
      { id: "p0-2", name: "Contains Duplicate", lc: 217, diff: "easy" },
      { id: "p0-3", name: "Missing Number", lc: 268, diff: "easy" },
    ]
  },
  {
    id: "p1",
    name: "Phase 1 — Arrays",
    days: "Days 8–18",
    color: "#fdd9b5",
    topics: ["Traversal & Simulation", "Prefix Sum", "Suffix Sum", "Two Pointer", "Sliding Window", "Kadane's Algorithm", "Matrix Problems"],
    problems: [
      { id: "p1-1", name: "Build Array from Permutation", lc: 1920, diff: "easy" },
      { id: "p1-2", name: "Concatenation of Array", lc: 1929, diff: "easy" },
      { id: "p1-3", name: "Running Sum of 1D Array", lc: 1480, diff: "easy" },
      { id: "p1-4", name: "Find Numbers with Even Number of Digits", lc: 1295, diff: "easy" },
      { id: "p1-5", name: "How Many Numbers Are Smaller", lc: 1365, diff: "easy" },
      { id: "p1-6", name: "Richest Customer Wealth", lc: 1672, diff: "easy" },
      { id: "p1-7", name: "Find the Difference of Two Arrays", lc: 1431, diff: "easy" },
      { id: "p1-8", name: "Find Pivot Index", lc: 724, diff: "easy" },
      { id: "p1-9", name: "Remove Duplicates from Sorted Array", lc: 26, diff: "easy" },
      { id: "p1-10", name: "Remove Element", lc: 27, diff: "easy" },
      { id: "p1-11", name: "Plus One", lc: 66, diff: "easy" },
      { id: "p1-12", name: "Merge Sorted Array", lc: 88, diff: "easy" },
      { id: "p1-13", name: "Best Time to Buy and Sell Stock", lc: 121, diff: "easy" },
      { id: "p1-14", name: "Single Number", lc: 136, diff: "easy" },
      { id: "p1-15", name: "Range Sum Query", lc: 303, diff: "easy" },
      { id: "p1-16", name: "Subarray Sum Equals K", lc: 560, diff: "medium" },
      { id: "p1-17", name: "Continuous Subarray Sum", lc: 523, diff: "medium" },
      { id: "p1-18", name: "Valid Palindrome", lc: 125, diff: "easy" },
      { id: "p1-19", name: "Squares of Sorted Array", lc: 977, diff: "easy" },
      { id: "p1-20", name: "Move Zeroes", lc: 283, diff: "easy" },
      { id: "p1-21", name: "Container With Most Water", lc: 11, diff: "medium" },
      { id: "p1-22", name: "3Sum", lc: 15, diff: "medium" },
      { id: "p1-23", name: "4Sum", lc: 18, diff: "medium" },
      { id: "p1-24", name: "Maximum Average Subarray I", lc: 643, diff: "easy" },
      { id: "p1-25", name: "Longest Repeating Character Replacement", lc: 424, diff: "medium" },
      { id: "p1-26", name: "Minimum Size Subarray Sum", lc: 209, diff: "medium" },
      { id: "p1-27", name: "Longest Substring Without Repeating Characters", lc: 3, diff: "medium" },
      { id: "p1-28", name: "Permutation in String", lc: 567, diff: "medium" },
      { id: "p1-29", name: "Minimum Window Substring", lc: 76, diff: "hard" },
      { id: "p1-30", name: "Maximum Subarray", lc: 53, diff: "medium" },
      { id: "p1-31", name: "Maximum Sum Circular Subarray", lc: 918, diff: "medium" },
      { id: "p1-32", name: "Maximum Product Subarray", lc: 152, diff: "medium" },
      { id: "p1-33", name: "Rotate Image", lc: 48, diff: "medium" },
      { id: "p1-34", name: "Set Matrix Zeroes", lc: 73, diff: "medium" },
      { id: "p1-35", name: "Spiral Matrix", lc: 54, diff: "medium" },
      { id: "p1-36", name: "Search a 2D Matrix", lc: 74, diff: "medium" },
    ]
  },
  {
    id: "p2",
    name: "Phase 2 — Strings",
    days: "Days 19–23",
    color: "#c9e8c9",
    topics: ["Character Arrays & Frequency", "Hashing with Strings", "Two Pointer on Strings", "Sliding Window", "KMP Algorithm (intro)"],
    problems: [
      { id: "p2-1", name: "Valid Anagram", lc: 242, diff: "easy" },
      { id: "p2-2", name: "Group Anagrams", lc: 49, diff: "medium" },
      { id: "p2-3", name: "Isomorphic Strings", lc: 205, diff: "easy" },
      { id: "p2-4", name: "Reverse Words in a String", lc: 151, diff: "medium" },
      { id: "p2-5", name: "Reverse String", lc: 344, diff: "easy" },
      { id: "p2-6", name: "Longest Common Prefix", lc: 14, diff: "easy" },
      { id: "p2-7", name: "Roman to Integer", lc: 13, diff: "easy" },
      { id: "p2-8", name: "Integer to Roman", lc: 12, diff: "medium" },
      { id: "p2-9", name: "Decode String", lc: 394, diff: "medium" },
    ]
  },
  {
    id: "p3",
    name: "Phase 3 — HashMaps",
    days: "Days 24–28",
    color: "#d5c5e8",
    topics: ["Frequency Counting", "Prefix Map Technique", "Counting Patterns"],
    problems: [
      { id: "p3-1", name: "Two Sum", lc: 1, diff: "easy" },
      { id: "p3-2", name: "Happy Number", lc: 202, diff: "easy" },
      { id: "p3-3", name: "Top K Frequent Elements", lc: 347, diff: "medium" },
      { id: "p3-4", name: "Longest Consecutive Sequence", lc: 128, diff: "medium" },
      { id: "p3-5", name: "Subarray Sum Equals K", lc: 560, diff: "medium" },
      { id: "p3-6", name: "Majority Element", lc: 169, diff: "easy" },
      { id: "p3-7", name: "Ransom Note", lc: 383, diff: "easy" },
    ]
  },
  {
    id: "p4",
    name: "Phase 4 — Linked Lists",
    days: "Days 29–38",
    color: "#fbe8c8",
    topics: ["Traversal & Reversal", "Fast & Slow Pointer", "Cycle Detection", "Merge Operations", "Reverse K Group"],
    problems: [
      { id: "p4-1", name: "Reverse Linked List", lc: 206, diff: "easy" },
      { id: "p4-2", name: "Middle of Linked List", lc: 876, diff: "easy" },
      { id: "p4-3", name: "Linked List Cycle", lc: 141, diff: "easy" },
      { id: "p4-4", name: "Palindrome Linked List", lc: 234, diff: "easy" },
      { id: "p4-5", name: "Merge Two Sorted Lists", lc: 21, diff: "easy" },
      { id: "p4-6", name: "Remove Nth Node From End", lc: 19, diff: "medium" },
      { id: "p4-7", name: "Add Two Numbers", lc: 2, diff: "medium" },
      { id: "p4-8", name: "Sort List", lc: 148, diff: "medium" },
    ]
  },
  {
    id: "p5",
    name: "Phase 5 — Stack",
    days: "Days 39–43",
    color: "#f9c5d1",
    topics: ["Monotonic Stack", "Expression Evaluation", "Parentheses Problems"],
    problems: [
      { id: "p5-1", name: "Valid Parentheses", lc: 20, diff: "easy" },
      { id: "p5-2", name: "Min Stack", lc: 155, diff: "medium" },
      { id: "p5-3", name: "Daily Temperatures", lc: 739, diff: "medium" },
      { id: "p5-4", name: "Next Greater Element I", lc: 496, diff: "easy" },
      { id: "p5-5", name: "Largest Rectangle in Histogram", lc: 84, diff: "hard" },
      { id: "p5-6", name: "Decode String", lc: 394, diff: "medium" },
    ]
  },
  {
    id: "p6",
    name: "Phase 6 — Queue",
    days: "Days 44–48",
    color: "#c9e8c9",
    topics: ["Queue Implementation", "Circular Queue", "BFS with Queue"],
    problems: [
      { id: "p6-1", name: "Implement Queue using Stacks", lc: 232, diff: "easy" },
      { id: "p6-2", name: "Design Circular Queue", lc: 622, diff: "medium" },
      { id: "p6-3", name: "Sliding Window Maximum", lc: 239, diff: "hard" },
      { id: "p6-4", name: "Rotting Oranges", lc: 994, diff: "medium" },
    ]
  },
  {
    id: "p7",
    name: "Phase 7 — Binary Search",
    days: "Days 49–58",
    color: "#d5c5e8",
    topics: ["Classic Binary Search", "Answer Space Search", "Peak Finding", "Search in Rotated Array"],
    problems: [
      { id: "p7-1", name: "Binary Search", lc: 704, diff: "easy" },
      { id: "p7-2", name: "Search Insert Position", lc: 35, diff: "easy" },
      { id: "p7-3", name: "Guess Number Higher or Lower", lc: 374, diff: "easy" },
      { id: "p7-4", name: "First Bad Version", lc: 278, diff: "easy" },
      { id: "p7-5", name: "Find Peak Element", lc: 162, diff: "medium" },
      { id: "p7-6", name: "Search in Rotated Sorted Array", lc: 33, diff: "medium" },
      { id: "p7-7", name: "Koko Eating Bananas", lc: 875, diff: "medium" },
      { id: "p7-8", name: "Capacity to Ship Packages", lc: 1011, diff: "medium" },
    ]
  },
  {
    id: "p8",
    name: "Phase 8 — Trees",
    days: "Days 59–73",
    color: "#fbe8c8",
    topics: ["DFS (Depth-First Search)", "BFS (Breadth-First Search)", "Tree Traversals", "Diameter & Height", "Lowest Common Ancestor", "Binary Search Tree"],
    problems: [
      { id: "p8-1", name: "Maximum Depth of Binary Tree", lc: 104, diff: "easy" },
      { id: "p8-2", name: "Same Tree", lc: 100, diff: "easy" },
      { id: "p8-3", name: "Invert Binary Tree", lc: 226, diff: "easy" },
      { id: "p8-4", name: "Binary Tree Level Order Traversal", lc: 102, diff: "medium" },
      { id: "p8-5", name: "Symmetric Tree", lc: 101, diff: "easy" },
      { id: "p8-6", name: "Diameter of Binary Tree", lc: 543, diff: "easy" },
      { id: "p8-7", name: "Balanced Binary Tree", lc: 110, diff: "easy" },
      { id: "p8-8", name: "Path Sum", lc: 112, diff: "easy" },
      { id: "p8-9", name: "Lowest Common Ancestor of BST", lc: 235, diff: "medium" },
      { id: "p8-10", name: "Validate Binary Search Tree", lc: 98, diff: "medium" },
      { id: "p8-11", name: "Kth Smallest Element in BST", lc: 230, diff: "medium" },
    ]
  },
  {
    id: "p9",
    name: "Phase 9 — Heap",
    days: "Days 74–81",
    color: "#f9c5d1",
    topics: ["Min Heap & Max Heap", "K-th Element Patterns", "Merge K Structures", "Streaming Median"],
    problems: [
      { id: "p9-1", name: "Kth Largest Element in Array", lc: 215, diff: "medium" },
      { id: "p9-2", name: "Top K Frequent Elements", lc: 347, diff: "medium" },
      { id: "p9-3", name: "Merge K Sorted Lists", lc: 23, diff: "hard" },
      { id: "p9-4", name: "Find Median from Data Stream", lc: 295, diff: "hard" },
    ]
  },
  {
    id: "p10",
    name: "Phase 10 — Backtracking",
    days: "Days 82–89",
    color: "#c9e8c9",
    topics: ["Subsets & Power Set", "Permutations", "Combination Sum", "N-Queens", "Word Search"],
    problems: [
      { id: "p10-1", name: "Subsets", lc: 78, diff: "medium" },
      { id: "p10-2", name: "Permutations", lc: 46, diff: "medium" },
      { id: "p10-3", name: "Combination Sum", lc: 39, diff: "medium" },
      { id: "p10-4", name: "N-Queens", lc: 51, diff: "hard" },
      { id: "p10-5", name: "Word Search", lc: 79, diff: "medium" },
    ]
  },
  {
    id: "p11",
    name: "Phase 11 — Graphs",
    days: "Days 90–96",
    color: "#d5c5e8",
    topics: ["DFS on Graphs", "BFS on Graphs", "Union-Find", "Topological Sort", "Dijkstra's Algorithm"],
    problems: [
      { id: "p11-1", name: "Number of Islands", lc: 200, diff: "medium" },
      { id: "p11-2", name: "Clone Graph", lc: 133, diff: "medium" },
      { id: "p11-3", name: "Course Schedule", lc: 207, diff: "medium" },
      { id: "p11-4", name: "Pacific Atlantic Water Flow", lc: 417, diff: "medium" },
      { id: "p11-5", name: "Rotting Oranges", lc: 994, diff: "medium" },
      { id: "p11-6", name: "Network Delay Time", lc: 743, diff: "medium" },
      { id: "p11-7", name: "Redundant Connection", lc: 684, diff: "medium" },
    ]
  },
  {
    id: "p12",
    name: "Phase 12 — Dynamic Programming",
    days: "Days 97–100",
    color: "#fbe8c8",
    topics: ["1D DP", "2D DP", "LCS Pattern", "0/1 Knapsack", "Partition Problems"],
    problems: [
      { id: "p12-1", name: "Climbing Stairs", lc: 70, diff: "easy" },
      { id: "p12-2", name: "House Robber", lc: 198, diff: "medium" },
      { id: "p12-3", name: "Coin Change", lc: 322, diff: "medium" },
      { id: "p12-4", name: "Longest Increasing Subsequence", lc: 300, diff: "medium" },
      { id: "p12-5", name: "Longest Common Subsequence", lc: 1143, diff: "medium" },
      { id: "p12-6", name: "Partition Equal Subset Sum", lc: 416, diff: "medium" },
      { id: "p12-7", name: "Edit Distance", lc: 72, diff: "medium" },
      { id: "p12-8", name: "Decode Ways", lc: 91, diff: "medium" },
    ]
  }
];

const LEVELS = [
  { level: 1, title: "Array Rookie", minXP: 0, maxXP: 200 },
  { level: 2, title: "Pattern Hunter", minXP: 200, maxXP: 600 },
  { level: 3, title: "Medium Slayer", minXP: 600, maxXP: 1200 },
  { level: 4, title: "Interview Ready", minXP: 1200, maxXP: 2200 },
  { level: 5, title: "DSA Queen", minXP: 2200, maxXP: 9999 },
];

const XP_MAP = { easy: 10, medium: 25, hard: 50 };

const DAILY_PLAN = [
  // Phase 0: Days 1-7
  { day: 1, phase: "p0", topic: "Time & Space Complexity + Big O", study: "Understand what makes code slow or memory-heavy. Watch Abdul Bari's complexity lecture.", problems: ["p0-1"] },
  { day: 2, phase: "p0", topic: "Arrays & Functions in C++", study: "Learn 1D and 2D arrays. Pass by value vs reference.", problems: ["p0-2"] },
  { day: 3, phase: "p0", topic: "References & Pointers", study: "Understand how memory addresses work. This is the core of C++.", problems: ["p0-3"] },
  { day: 4, phase: "p0", topic: "STL: vector & pair", study: "vector is your dynamic array. Learn push_back, size, resize, and pairs.", problems: [] },
  { day: 5, phase: "p0", topic: "STL: map & unordered_map", study: "Learn when to use ordered vs unordered. O(log n) vs O(1) lookup.", problems: [] },
  { day: 6, phase: "p0", topic: "STL: set, stack, queue", study: "When to use each. Think about the access pattern needed.", problems: [] },
  { day: 7, phase: "p0", topic: "STL Review + priority_queue", study: "Max heap by default. Know how to make a min heap. Review all STL from this week.", problems: [] },
  // Phase 1: Days 8-18
  { day: 8, phase: "p1", topic: "Array Traversal & Warmup", study: "Walk through arrays, understand indexing. Do the warm-up set from Phase 1.", problems: ["p1-1","p1-2","p1-3","p1-4"] },
  { day: 9, phase: "p1", topic: "More Array Warmups", study: "Continue easy array problems.", problems: ["p1-5","p1-6","p1-7","p1-8"] },
  { day: 10, phase: "p1", topic: "Basic Array Operations", study: "Two Sum, Remove Duplicates, Merge Sorted Array.", problems: ["p1-9","p1-10","p1-11","p1-12"] },
  { day: 11, phase: "p1", topic: "Array Classics", study: "Best Time to Buy/Sell, Contains Duplicate, Missing Number, Single Number.", problems: ["p1-13","p0-2","p0-3","p1-14"] },
  { day: 12, phase: "p1", topic: "Prefix Sum", study: "Precompute prefix sums once, answer range queries in O(1). Pattern: prefix[i] = prefix[i-1] + arr[i].", problems: ["p1-3","p1-15","p1-8"] },
  { day: 13, phase: "p1", topic: "Prefix Sum Advanced", study: "Subarray problems with hashmap + prefix sum. Key insight: sum[i..j] = prefix[j] - prefix[i-1].", problems: ["p1-16","p1-17"] },
  { day: 14, phase: "p1", topic: "Two Pointer", study: "Use two indices moving inward or in same direction. Sort first when needed.", problems: ["p1-18","p1-19","p1-20"] },
  { day: 15, phase: "p1", topic: "Two Pointer Advanced", study: "Container with Most Water and 3Sum require careful pointer logic.", problems: ["p1-21","p1-22"] },
  { day: 16, phase: "p1", topic: "Sliding Window Fixed", study: "Fixed-size window: add right element, remove left element. Window = [i, i+k-1].", problems: ["p1-24"] },
  { day: 17, phase: "p1", topic: "Sliding Window Variable", study: "Expand right until condition breaks, shrink from left. Most powerful pattern.", problems: ["p1-25","p1-26","p1-27","p1-28"] },
  { day: 18, phase: "p1", topic: "Sliding Window Hard + Kadane", study: "Minimum Window Substring is a classic hard. Then learn Kadane for max subarray.", problems: ["p1-29","p1-30","p1-31","p1-32"] },
  // Days 19-23: Strings
  { day: 19, phase: "p2", topic: "String Basics + Anagrams", study: "Strings are character arrays. Frequency counting solves many string problems.", problems: ["p2-1","p2-3","p2-5","p2-6"] },
  { day: 20, phase: "p2", topic: "String Manipulation", study: "In-place vs building new string. Reverse words vs reverse characters.", problems: ["p2-4","p2-7","p2-8"] },
  { day: 21, phase: "p2", topic: "Group Anagrams + Decode", study: "Sorting a string is O(n log n) — use sorted key for grouping.", problems: ["p2-2","p2-9"] },
  // Days 22-28: HashMap
  { day: 22, phase: "p3", topic: "HashMap Frequency Patterns", study: "Count elements. Answer questions in O(1) using the map.", problems: ["p3-1","p3-6","p3-7"] },
  { day: 23, phase: "p3", topic: "HashMap Advanced", study: "Top K Frequent uses HashMap + Heap or Bucket Sort.", problems: ["p3-3","p3-4"] },
  { day: 24, phase: "p3", topic: "Prefix Map + Subarray", study: "Store prefix sums in a map. Check if (sum - k) exists.", problems: ["p3-5","p3-2"] },
  // Phase 4: Linked List
  { day: 25, phase: "p4", topic: "Linked List Basics", study: "Nodes point to next. No random access. Master head, curr, prev pattern.", problems: ["p4-1","p4-2"] },
  { day: 26, phase: "p4", topic: "Fast & Slow Pointer", study: "Slow moves 1 step, fast moves 2. Used for cycle, middle, nth from end.", problems: ["p4-3","p4-4"] },
  { day: 27, phase: "p4", topic: "Merge & Modify", study: "Merge sorted lists by comparing heads. Remove nth from end: two-pass or two-pointer.", problems: ["p4-5","p4-6"] },
  { day: 28, phase: "p4", topic: "Linked List Hard", study: "Add Two Numbers simulates addition. Sort List uses merge sort idea.", problems: ["p4-7","p4-8"] },
  // Days 29-38 continue with more phases...
  { day: 29, phase: "p5", topic: "Stack & Valid Parentheses", study: "Stack = LIFO. Push open brackets, pop and match close brackets.", problems: ["p5-1","p5-4"] },
  { day: 30, phase: "p5", topic: "Monotonic Stack", study: "Maintain a stack in increasing or decreasing order. Great for next greater element.", problems: ["p5-2","p5-3"] },
  { day: 31, phase: "p5", topic: "Monotonic Stack Hard", study: "Largest Rectangle — think of each bar as the shortest bar extending left and right.", problems: ["p5-5","p5-6"] },
  { day: 32, phase: "p6", topic: "Queue Fundamentals", study: "Queue = FIFO. Essential for BFS. Implement using two stacks.", problems: ["p6-1","p6-2"] },
  { day: 33, phase: "p6", topic: "BFS with Queue", study: "Rotting oranges is a multi-source BFS. Start all sources simultaneously.", problems: ["p6-4"] },
  { day: 34, phase: "p6", topic: "Sliding Window Maximum", study: "Use a deque to track max in every window. O(n) solution.", problems: ["p6-3"] },
  { day: 35, phase: "p7", topic: "Binary Search Basics", study: "Eliminate half the search space each step. Know left <= right vs left < right.", problems: ["p7-1","p7-2","p7-3","p7-4"] },
  { day: 36, phase: "p7", topic: "Binary Search on Answer", study: "When you can check if an answer is valid, binary search on the answer range.", problems: ["p7-5","p7-6"] },
  { day: 37, phase: "p7", topic: "Binary Search Hard", study: "Koko and Capacity — classic answer-space binary search with a feasibility checker.", problems: ["p7-7","p7-8"] },
  { day: 38, phase: "p7", topic: "Binary Search Review Day", study: "Revisit all binary search problems. Explain each template clearly in your notes.", problems: [] },
  // Trees
  { day: 39, phase: "p8", topic: "Tree DFS Basics", study: "Recursive DFS is elegant. Base case: if node is null, return. Think left, right, node.", problems: ["p8-1","p8-2","p8-5","p8-3"] },
  { day: 40, phase: "p8", topic: "Tree Properties", study: "Balanced = height difference <= 1. Diameter = longest path through any node.", problems: ["p8-6","p8-7","p8-8"] },
  { day: 41, phase: "p8", topic: "Tree BFS (Level Order)", study: "Use a queue. Process level by level. Track level size.", problems: ["p8-4"] },
  { day: 42, phase: "p8", topic: "BST Properties", study: "BST: left < node < right. Inorder traversal gives sorted order.", problems: ["p8-9","p8-10","p8-11"] },
  // Heap
  { day: 43, phase: "p9", topic: "Heap Basics", study: "Max-heap gives largest in O(log n). Min-heap gives smallest. Use for top-K problems.", problems: ["p9-1","p9-2"] },
  { day: 44, phase: "p9", topic: "Heap Hard", study: "Merge K lists: use min-heap of (value, node). Median stream: two heaps.", problems: ["p9-3","p9-4"] },
  // Backtracking
  { day: 45, phase: "p10", topic: "Backtracking Intro", study: "Explore, then undo. Think of it as a decision tree. Choose, recurse, un-choose.", problems: ["p10-1","p10-2"] },
  { day: 46, phase: "p10", topic: "Combination Problems", study: "Combination sum: can reuse elements. Use start index to avoid duplicates.", problems: ["p10-3","p10-5"] },
  { day: 47, phase: "p10", topic: "Backtracking Hard", study: "N-Queens: place queen, recurse, remove queen. Track column and diagonal conflicts.", problems: ["p10-4"] },
  // Graphs
  { day: 48, phase: "p11", topic: "Graph DFS", study: "Mark visited before recursing. DFS explores deep before wide.", problems: ["p11-1","p11-2"] },
  { day: 49, phase: "p11", topic: "Graph BFS + Topological Sort", study: "BFS for shortest path in unweighted graph. Topo sort for dependency ordering.", problems: ["p11-3","p11-4","p11-5"] },
  { day: 50, phase: "p11", topic: "Union Find & Dijkstra", study: "Union-Find for disjoint sets. Dijkstra for weighted shortest path with priority queue.", problems: ["p11-6","p11-7"] },
  // DP
  { day: 51, phase: "p12", topic: "DP Introduction", study: "Think: can I solve this problem using answers to smaller subproblems? Build bottom-up.", problems: ["p12-1","p12-2"] },
  { day: 52, phase: "p12", topic: "1D DP", study: "Coin change: dp[amount] = min coins to make amount. LIS: for each i, find best j < i.", problems: ["p12-3","p12-4"] },
  { day: 53, phase: "p12", topic: "2D DP", study: "LCS uses a 2D grid. dp[i][j] = length of LCS of s1[0..i] and s2[0..j].", problems: ["p12-5","p12-7"] },
  { day: 54, phase: "p12", topic: "Knapsack & Partition DP", study: "Can we partition into equal subsets? Think: can we make sum/2 using subset?", problems: ["p12-6","p12-8"] },
  // Final phase
  { day: 55, phase: "p12", topic: "Boss Battle — Arrays + Strings", study: "Mixed review day. Pick 2 random medium array problems you haven't seen.", problems: ["p1-22","p1-23","p2-2"] },
  { day: 56, phase: "p12", topic: "Boss Battle — LL + Stack", study: "Mixed review. Try these without looking at your notes first.", problems: ["p4-6","p4-7","p5-5"] },
  { day: 57, phase: "p12", topic: "Boss Battle — Tree + Graph", study: "Mixed hard problems from Trees and Graphs.", problems: ["p8-9","p8-10","p11-3"] },
  { day: 58, phase: "p12", topic: "Boss Battle — DP", study: "Attempt 3 DP problems you've never done before from LeetCode.", problems: ["p12-4","p12-5","p12-7"] },
];

// Pad remaining days 59-100 with review/contest days
for (let d = 59; d <= 100; d++) {
  DAILY_PLAN.push({
    day: d,
    phase: "p12",
    topic: d <= 70 ? "Mixed Grind — Company Tagged" : d <= 85 ? "Random Mediums + Mock Interview" : "Weekly Contest + Review",
    study: "Pick problems from your weakest phase. Aim for 3 medium problems in 90 minutes.",
    problems: []
  });
}
