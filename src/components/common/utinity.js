let categoryJson = require('./config/Categorys')["DATA"];
let productJson = require('./config/Products');
let Define = require('./define');

let Utinity = function () {

};

Utinity.formatAmount =   function(n) {
    return  n.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};

Utinity.getCategory = function () {
    return categoryJson;
};

Utinity.getAllProduct = function () {
    return productJson;
};

Utinity.getProductById = function (id) {
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

Utinity.getUrlImage =function (name) {
    return Define.PATH_PUBLIC_IMG + name + '.png';
};

export default Utinity;