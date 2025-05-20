import yahooFinance from 'yahoo-finance2';

const indexSymbols = {
  'S&P 500': '^GSPC',
  'Nasdaq Composite': '^IXIC',
  'Dow Jones Industrial Average': '^DJI',
  'Russell 2000': '^RUT',
  'Bloomberg US Aggregate Bond Index': 'AGG',
  'S&P 500 Bond Index': '^SP500BDT',
};

export async function fetchIndexHistory(indexName, startDate, endDate) {
  const symbol = indexSymbols[indexName];
  if (!symbol) throw new Error(`Unknown index: ${indexName}`);

  try {
    const result = await yahooFinance.historical(symbol, {
      period1: new Date(startDate),
      period2: new Date(endDate),
      interval: '1d',
    });

    return result;
  } catch (error) {
    console.error(`Error fetching data for ${indexName}:`, error);
    return [];
  }
}
mkdir utils
mv pages/fetchIndexData.js utils/
