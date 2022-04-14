async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    
    const response = await fetch('https://api.twelvedata.com/time_series?apikey=1b5fe57d377f4f6f9cf09c643d6d05f9')
    const result = await response.json()

    const { GME, MSFT, DIS, BNTX } = result;
    const stocks = [GME, MSFT, DIS, BNTX];

    stocks.forEach( stock => stock.values.reverse())
}
 console.log(stocks)
main()


