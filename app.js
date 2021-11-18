const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
// var func = async() => {
//     let data = await CoinGeckoClient.simple.price({
//         ids: ['binance', 'ethereum'],
//         vs_currencies: ['usd'],
    
        
//     });
//     console,log(data);
    
// };

const CoinGeckoClient = new CoinGecko();
    let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
        coin_ids: ['bitcoin']
    });
    var _coinList = {};
    var _datacc = data.data.tickers.filter(t => t.target == 'USD');
    [
        'BTC'
    ].forEach((i) => {
        var _temp = _datacc.filter(t => t.base == i);
        var _res = _temp.length == 0 ? [] : _temp[0];
        _coinList[i] = _res.last;
    })
console.log(_coinList);

// let data = await CoinGeckoClient.simple.price({
//     ids: ['bitcoin', 'ethereum'],
//     vs_currencies: ['eur', 'usd'],

//     console,log(data)
// });

