//You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
//
//On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
//
//Find and return the maximum profit you can achieve.

fun maxProfit(prices: IntArray): Int {
  var profit = 0

  for (i in 1..<prices.size) {
    val currentPrice = prices[i]
    val previousPrice = prices[i - 1]
    if (currentPrice > previousPrice) {
      profit += currentPrice - previousPrice
    }
  }

  return profit
}


val prices = intArrayOf(7, 1, 5, 3, 6, 4)
val prices2 = intArrayOf(1, 2, 3, 4, 5)
val prices3 = intArrayOf(7, 6, 4, 3, 1)
val prices4 = intArrayOf(6, 1, 3, 2, 4, 7)

println(maxProfit(prices) == 7)
println(maxProfit(prices2) == 4)
println(maxProfit(prices3) == 0)
println(maxProfit(prices4) == 7)