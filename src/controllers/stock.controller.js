import axios from "axios";
import { stockDataSchema, CompanyStock } from "../models/stock.schema.js";

// export async function FetchStocks(req, res, next) {
//   try {
//     const companyStocks = await CompanyStock.find();
//     return res.status(200).json({
//       message: "Successfully fetched all the Stocks",
//       data: companyStocks
//     });
//   } catch (err) {
//     next(err);
//   }
// }
export async function FetchStocks(req, res, next) {
  try {
    const companyStocks = await CompanyStock.find();

    // Calculate the best trade price (best buy price in this case)
    const bestPrice = companyStocks.reduce((best, stock) => {
      return Math.max(best, stock.buy);
    }, 0);

    return res.status(200).json({
      message: "Successfully fetched all the Stocks",
      bestPrice: bestPrice, // Returning best price
      data: companyStocks
    });
  } catch (err) {
    next(err);
  }
}


export async function FetchAndStoreTopStocks() {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;

    const top10Tickers = Object.entries(tickers)
      .sort(([, a], [, b]) => b.volume - a.volume)
      .slice(0, 10)
      .map(([name, data]) => ({
        name,
        last: data.last,
        buy: data.buy,
        sell: data.sell,
        volume: data.volume,
        base_unit: data.base_unit
      }));

    const validatedTickers = top10Tickers.map(ticker => {
      const result = stockDataSchema.safeParse(ticker);
      return result.success ? result.data : null;
    }).filter(Boolean);

    await CompanyStock.deleteMany({}); 
    await CompanyStock.insertMany(validatedTickers);

    console.log('Successfully fetched and stored top 10 tickers!');

  } catch (error) {
    console.error('Error fetching or storing tickers:', error);
  }
}