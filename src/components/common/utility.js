let categoryJson = require('./config/Categorys')["DATA"];
let productJson = require('./config/Products');
let contact = require('./config/Contacts')[0];
let Define = require('./define');

let Utility = function () {

};

Utility.formatAmount =   function(n) {
    return  n.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};

Utility.getCategory = function () {
    return categoryJson;
};

Utility.getAllProduct = function () {
    return productJson;
};

Utility.getProductById = function (id) {
    for(let i =0; i< categoryJson.length; i++){
        let categoryId = categoryJson[i].id;
        for(let j =0; j < productJson[categoryId].length; j++){
            let product = productJson[categoryId][j];
            if(id == product.id){
                return product;
            }
        }
    }
};

Utility.getUrlImage =function (name) {
    return Define.PATH_PUBLIC_IMG + name + '.png';
};

Utility.checkProduct = function (quantity) {
    if(quantity > 0){
        return "Còn Hàng"
    }

    return "Hết Hàng"
};

Utility.getContact = function () {
    return contact;
};

export default Utility;