const express = require('express');
const axios = require('axios');
const getEssentialsData = require("../factory/getProducts.factory");
const router = express.Router();


router.get('/listar-produtos', async (req, res) => {
    console.log('TESTE FUNCIONOU');
});


router.get('/buscar-termo', async (req, res) => {
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
            console.error('Erro na solicitação:', error.message);
        });
});

router.get('/buscar-imagem', async (req, res) => {
    const siteId = 'MLB';
    const idImage = 'MLB3553462995';

    const url = `https://api.mercadolibre.com/items/${idImage}`;

    axios.get(url)
        .then(response => {

        })
        .catch(error => {
            console.error('Erro na solicitação:', error.message);
        });
});


module.exports = router;