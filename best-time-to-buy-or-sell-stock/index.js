/**
 * @param {number[]} prices
 * @return {number}
 */
const foo = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const nextPrice = prices[i + 1];

    if (typeof nextPrice === 'undefined') {
      break;
    }


    if (currentPrice > nextPrice) {
      continue;
    }

    profit = profit + (nextPrice - currentPrice);
  }

  return profit;
};

console.log({ r: foo([7,6,4,3,1])})
