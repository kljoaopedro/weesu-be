const ProductModel = require("../models/productModel");
function getEssentialsData(resultsJson) {
    const sanitizeProducts = [];
    if (resultsJson) {
       resultsJson.forEach(product => {
           sanitizeProducts.push(new ProductModel(
               product.id,
               product.title,
               product.price,
               product.original_price,
               product.permalink,
               product.thumbnail
           ))
       })
        return sanitizeProducts;
    }
    return [];
}

module.exports = getEssentialsData;