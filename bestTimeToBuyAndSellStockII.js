/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0, valley = prices[0], peak = prices[0], maxProfit = 0;
    while(i < prices.length - 1) {
        while(i < prices.length - 1 && prices[i] >= prices[i+1]) {
            i++;
        }
        valley = prices[i];
        while(i < prices.length - 1 && prices[i] <= prices[i+1]) {
            i++;
        }
        peak = prices[i];
        maxProfit +=  peak - valley;
    }
    return maxProfit;
};

module.exports = maxProfit;
