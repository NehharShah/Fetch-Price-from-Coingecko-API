const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

async function getPriceFeed(){
    try{
        const siteUrl = 'https://coinmarketcap.com//v1/cryptocurrency/quotes/latest/quote'

        const data = await axios({
            method: 'GET',
            url: siteUrl,
        })
        console.log(data)
    }

    
    catch(err){
        console.log(err);
    }


}

getPriceFeed();