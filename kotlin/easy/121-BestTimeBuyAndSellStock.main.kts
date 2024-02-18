//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

fun maxProfit(prices: IntArray): Int {
	var bestPrice = prices[0]
	var profit = 0

	for (currentPrice in prices) {

		if (currentPrice < bestPrice) {
			bestPrice = currentPrice
		}

		if (currentPrice > bestPrice) {
			profit = maxOf(profit, currentPrice - bestPrice)
		}
	}

	return profit
}

val prices = intArrayOf(7,6,4,3,1)

println(maxProfit(prices) == 0)

