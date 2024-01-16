const express = require('express');
const axios = require('axios');
const getEssentialsData = require("../factory/getProducts.factory");
const router = express.Router();
require('dotenv').config();

router.get('/search-product', async (req, res) => {
    const siteId = 'MLB';
    const searchTerm = req.query.query;
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10; //

    const url = `https://api.mercadolibre.com/sites/${siteId}/search?q=${searchTerm}&offset=${offset}&limit=${limit}`;

    axios.get(url)
        .then(response => {
            res.send(getEssentialsData(response.data.results))
        })
        .catch(error => {
            res.status(404);
            console.error('Erro na solicitação:', error.message);
        });
});

router.get('/get-details:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const url = `https://api.mercadolibre.com/items/${itemId}/description`;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

    axios.get(url, {
        headers: {
            'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
    })
        .then(response => {
            const { plain_text } = response.data;
            res.json(plain_text);
        })
        .catch(error => {
            // console.error('There was an error!', error);
        });
});


module.exports = router;