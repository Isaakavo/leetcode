/**
 * Brute force implementation
 * @param prices 
 * @returns maximunProfit
 */
// function maxProfit(prices: number[]): number {
//   let maximunProfit = 0;

//   //Iterates over all the array to get the pairs
//   //only if the buying day is lower than the selling day
//   //the profit is calculated, and only if the profit is higher than the 
//   //previous maximumProfit this value is updated
//   for (let i = 0; i < prices.length; i++) {
//     let buyDay = prices[i];
//     for (let j = i + 1; j < prices.length; j++) {
//       let sellDay = prices[j];
//       if (buyDay < sellDay) {
//         let profit = sellDay - buyDay;
//         if (profit > maximunProfit) {
//           maximunProfit = profit;
//         }
//       }
//     }
//   }

//   return maximunProfit;
// }


/*
* Divide and conquet solution
*/

// function maxCrossingSubarray(prices:number[], low: number, mid: number, high: number) {
//   let leftSum = Number.MIN_VALUE;
//   let sum = 0;

//   for (let i = mid; i >= low; i--) {
//     sum += prices[i];
//     if (sum > leftSum) {
//       leftSum = sum;
//     }
//   }

//   let rightSum = Number.MIN_VALUE;
//   sum = 0;

//   for (let j = mid + 1; j <= high; j++) {
//     sum += prices[j];
//     if (sum > rightSum) {
//       rightSum = sum;
//     }
//   }

//   return (leftSum + rightSum);
// }

// function maximunSubarray(prices:number[], low: number, high: number) {
//   if (high === low) {
//     return prices[low];
//   } else {
//     let mid = Math.floor((low + high) /2);
//     let leftSum = maximunSubarray(prices, low, mid);
//     let rightSum = maximunSubarray(prices, mid + 1, high)
//     let crossSum = maxCrossingSubarray(prices, low, mid, high);
//     if (leftSum >= rightSum && leftSum >= crossSum) {
//       return leftSum;
//     }
//     else if (rightSum >= leftSum && rightSum >= crossSum) {
//       return rightSum;
//     } else {
//       return crossSum;
//     }
//   }
// }

// function maxProfit(prices:number[]): number {
//   return maximunSubarray(prices, 0, prices.length);
// }

function maxProfit(prices:number[]): number {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7,6,4,3,1]

console.log(maxProfit(prices));
console.log(maxProfit(prices2));
