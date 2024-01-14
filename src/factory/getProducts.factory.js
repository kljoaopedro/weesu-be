const ProductModel = require("../models/productModel");

function getEssentialsData(resultsJson) {
    if (resultsJson) {
        return resultsJson.map(product => [
            new ProductModel(
                product.id,
                product.title,
                product.price,
                product.original_price,
                product.permalink,
                product.thumbnail
            )
        ])
    }
    return [];
}

module.exports = getEssentialsData;