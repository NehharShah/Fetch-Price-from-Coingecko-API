var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/simple/price',
  params: {ids: 'ethereum,binancecoin', vs_currencies: 'usd,usd'},
  
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});