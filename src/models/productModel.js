
class ProductModel {
    constructor(productId, name, price, originalPrice, linkML, thumbnail) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.originalPrice = originalPrice;
        this.linkML = linkML;
        this.thumbnail = thumbnail;
    }
}

module.exports = ProductModel;