/**
 * @param {number} n n是一个正整数
 * @return {number}
 */
var climbStairs = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new TypeError('n是一个正整数');
  }

  // return climbStairs1(0, n);
  // return climbStairs2(0, n);
  // return climbStairs3(n);
  // return climbStairs4(n);
  return climbStairs6(n);
};

/**
 * 暴力法：把所有可能爬的阶数进行组合 
 * 时间复杂度O(2的n次方) 空间复杂度O(n)
 * 
 * 假设从i阶爬到n阶，有f(i, n)种方法
 * 0. 从第i阶往上爬，每一步只能爬一阶/二阶
 * 1. 到i+1阶，从i+1阶到n阶有f(i+1, n)种方法
 * 2. 到i+2阶，从i+2阶到n阶有f(i+2, n)种方法
 * 因此，f(i, n) = f(i+1, n) + f(i+2, n)
 * 
 * 初始化：i = 0, return f(1, n) + f(2, n)
 * 保持：i = 1, return f(2, n) + f(3, n)
 * 终止：i = n, return 1; i = n+1, return 0
 * 
 * @param {number} i 当前阶数
 * @param {number} n 目标阶数
 * @return {number}
 */
function climbStairs1(i, n) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  return climbStairs1(i+1, n) + climbStairs1(i+2, n);
}

/**
 * 和climbStairs1类似，增加了计算结果的缓存
 * 时间复杂度O(n) 空间复杂度O(n)
 * 
 * @param {number} i 当前阶数
 * @param {number} n 目标阶数
 * @param {缓存} memo 缓存之前的计算结果
 */
function climbStairs2(i, n, memo = new Map()) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  if (memo.has(i)) {
    return memo.get(i);
  }
  memo.set(i, climbStairs2(i+1, n, memo) + climbStairs2(i+2, n, memo));
  return memo.get(i);
}

/**
 * 动态规划法：f(n) = f(n-1) + f(n-2)
 * 时间复杂度O(n) 空间复杂度O(n)
 * 
 * 1. 爬到第n阶
 * 2. 可能是从n-1阶上来
 * 3. 可能是从n-2阶上来
 * 
 * 初始化：f(1) = 1, f(2) = 2
 * 保持：f(3) = f(2) + f(1)
 * 终止：f(n) = f(n-1) + f(n-2)
 * 
 * @param {number} n 目标阶数
 */
function climbStairs3(n) {
  if(n === 1) {
    return 1;
  }
  const map = new Map();
  map.set(1, 1);
  map.set(2, 2);
  for (let i = 3; i <= n; i++) {
    map.set(i, map.get(i-1) + map.get(i-2));
  }
  return map.get(n);
}

/**
 * 斐波那契数列
 * 时间复杂度O(n) 空间复杂度O(1)
 * 
 * 初始化：f(1) = 1, f(2) = 2
 * 保持：f(3) = f(2) + f(1)
 * 终止：f(n) = f(n-1) + f(n-2)
 * 
 * @param {number} n 目标阶数
 */
function climbStairs4(n) {
  if (n === 1) {
    return 1;
  }
  let first = 1, second = 2, third;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return second;
}

// Binets
function climbStairs5(n) {
  //
}

// 斐波那契公式 时间复杂度O(lg(n)) 空间复杂度O(1)
function climbStairs6(n) {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1+sqrt5)/2, n+1) - Math.pow((1-sqrt5)/2, n+1);
  return Math.round(fibn/sqrt5);
}

module.exports = climbStairs;
