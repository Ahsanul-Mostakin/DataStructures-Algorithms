// 9️⃣ Dynamic Programming (10 Problems)

// 1. Climbing Stairs (Fibonacci DP)
// Problem: You can climb 1 or 2 steps at a time. Given n stairs, return the number of distinct ways to reach the top.

// Brute Force - O(2^n) time, O(n) space (recursion)
function climbStairsBrute(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairsBrute(n - 1) + climbStairsBrute(n - 2);
}

// Optimal - O(n) time, O(1) space (iterative DP)
function climbStairs(n) {
  if (n <= 0) return 0;
  let prev = 1,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

// Output
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3

// 2. House Robber
// Problem: Given an array nums representing house money, return the maximum amount you can rob without robbing adjacent houses.

// Brute Force - O(2^n) time, O(n) space (recursion)
function robBrute(nums) {
  function recurse(index) {
    if (index >= nums.length) return 0;
    return Math.max(nums[index] + recurse(index + 2), recurse(index + 1));
  }
  return recurse(0);
}

// Optimal - O(n) time, O(1) space (iterative DP)
function rob(nums) {
  if (!nums.length) return 0;
  let prev = 0,
    curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    [prev, curr] = [curr, Math.max(curr, prev + nums[i])];
  }
  return curr;
}

// Output
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12

// 3. Longest Increasing Subsequence
// Problem: Given an array nums, return the length of the longest strictly increasing subsequence.

// Brute Force - O(2^n) time, O(n) space (recursion)
function lengthOfLISBrute(nums) {
  function recurse(index, prev) {
    if (index >= nums.length) return 0;
    let take = 0;
    if (nums[index] > prev) take = 1 + recurse(index + 1, nums[index]);
    const skip = recurse(index + 1, prev);
    return Math.max(take, skip);
  }
  return recurse(0, -Infinity);
}

// Optimal - O(n²) time, O(n) space (DP)
function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  const dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}

// Output
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4

// 4. Unique Paths
// Problem: A robot starts at (0,0) in an m x n grid and can move right or down. Return the number of unique paths to reach (m-1, n-1).

// Brute Force - O(2^(m+n)) time, O(m+n) space (recursion)
function uniquePathsBrute(m, n) {
  function recurse(row, col) {
    if (row >= m || col >= n) return 0;
    if (row === m - 1 && col === n - 1) return 1;
    return recurse(row + 1, col) + recurse(row, col + 1);
  }
  return recurse(0, 0);
}

// Optimal - O(m * n) time, O(m * n) space (DP)
function uniquePaths(m, n) {
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

// Output
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3

// 5. Coin Change
// Problem: Given an array of coin denominations coins and an amount amount, return the fewest number of coins needed to make up that amount, or -1 if impossible.

// Brute Force - O(amount^n) time, O(amount) space (recursion)
function coinChangeBrute(coins, amount) {
  function recurse(amt) {
    if (amt === 0) return 0;
    if (amt < 0) return Infinity;
    let minCoins = Infinity;
    for (let coin of coins) {
      minCoins = Math.min(minCoins, 1 + recurse(amt - coin));
    }
    return minCoins;
  }
  const result = recurse(amount);
  return result === Infinity ? -1 : result;
}

// Optimal - O(amount * n) time, O(amount) space (DP)
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Output
console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1

// 6. Partition Equal Subset Sum
// Problem: Given an array nums of positive integers, return true if it can be partitioned into two subsets with equal sums, false otherwise.

// Brute Force - O(2^n) time, O(n) space (recursion)
function canPartitionBrute(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  function recurse(index, sum) {
    if (sum === target) return true;
    if (sum > target || index >= nums.length) return false;
    return recurse(index + 1, sum + nums[index]) || recurse(index + 1, sum);
  }
  return recurse(0, 0);
}

// Optimal - O(n * sum) time, O(sum) space (DP)
function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
}

// Output
console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false

// 7. Minimum Path Sum
// Problem: Given an m x n grid of non-negative numbers, find a path from top-left to bottom-right with minimum sum (only right or down moves).

// Brute Force - O(2^(m+n)) time, O(m+n) space (recursion)
function minPathSumBrute(grid) {
  function recurse(row, col) {
    if (row >= grid.length || col >= grid[0].length) return Infinity;
    if (row === grid.length - 1 && col === grid[0].length - 1)
      return grid[row][col];
    return (
      grid[row][col] + Math.min(recurse(row + 1, col), recurse(row, col + 1))
    );
  }
  return recurse(0, 0);
}

// Optimal - O(m * n) time, O(1) space (in-place DP)
function minPathSum(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) grid[i][j] += grid[i][j - 1];
      else if (j === 0) grid[i][j] += grid[i - 1][j];
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}

// Output
let grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(grid1)); // 7

// 8. Edit Distance
// Problem: Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) to convert word1 to word2.

// Brute Force - O(3^n) time, O(n) space (recursion)
function minDistanceBrute(word1, word2) {
  function recurse(i, j) {
    if (i === word1.length) return word2.length - j;
    if (j === word2.length) return word1.length - i;
    if (word1[i] === word2[j]) return recurse(i + 1, j + 1);
    return (
      1 +
      Math.min(
        recurse(i + 1, j), // delete
        recurse(i, j + 1), // insert
        recurse(i + 1, j + 1) // replace
      )
    );
  }
  return recurse(0, 0);
}

// Optimal - O(m * n) time, O(m * n) space (DP)
function minDistance(word1, word2) {
  const dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1).fill(0));
  for (let i = 0; i <= word1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= word2.length; j++) dp[0][j] = j;
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[word1.length][word2.length];
}

// Output
console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5

// 9. 0/1 Knapsack Problem
// Problem: Given weights weights, values values, and capacity W, return the maximum value achievable by selecting items without exceeding W.

// Brute Force - O(2^n) time, O(n) space (recursion)
function knapsackBrute(weights, values, W) {
  function recurse(index, capacity) {
    if (index >= weights.length || capacity <= 0) return 0;
    const skip = recurse(index + 1, capacity);
    if (weights[index] > capacity) return skip;
    const take = values[index] + recurse(index + 1, capacity - weights[index]);
    return Math.max(take, skip);
  }
  return recurse(0, W);
}

// Optimal - O(n * W) time, O(n * W) space (DP)
function knapsack(weights, values, W) {
  const n = weights.length;
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
}

// Output
console.log(knapsack([1, 2, 3], [6, 10, 12], 5)); // 28
console.log(knapsack([2, 3, 4], [4, 5, 6], 7)); // 11

// 10. Wildcard Matching
// Problem: Given a string s and a pattern p with wildcards (* for any sequence, ? for any single character), return true if s matches p, false otherwise.

// Brute Force - O(2^n) time, O(n) space (recursion)
function isMatchBrute(s, p) {
  function recurse(i, j) {
    if (i === s.length && j === p.length) return true;
    if (j === p.length) return false;
    if (i === s.length) return p[j] === "*" && recurse(i, j + 1);
    if (p[j] === "?" || s[i] === p[j]) return recurse(i + 1, j + 1);
    if (p[j] === "*") return recurse(i + 1, j) || recurse(i, j + 1);
    return false;
  }
  return recurse(0, 0);
}

// Optimal - O(m * n) time, O(m * n) space (DP)
function isMatch(s, p) {
  const dp = Array(s.length + 1)
    .fill()
    .map(() => Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") dp[0][j] = dp[0][j - 1];
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "?" || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }
  return dp[s.length][p.length];
}

// Output
console.log(isMatch("aa", "a")); // false
console.log(isMatch("adceb", "*a*b")); // true
