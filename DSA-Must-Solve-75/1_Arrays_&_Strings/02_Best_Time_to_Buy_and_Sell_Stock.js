/* 
2. Best Time to Buy and Sell Stock
Problem: Given an array `prices` where `prices[i]` is the price on day `i`, find the maximum profit from one buy and one sell.
*/

function maxProfitBrute(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }
  return maxProfit;
}
// Optimal
function maxProfit(prices) {
  let minPrice = Infinity,
    maxProfit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
console.log(maxProfitBrute([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
