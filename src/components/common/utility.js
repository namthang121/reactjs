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

Utility.formatPhoneNumber = function(){
    let self = this;
    let str =  self.getContact().phoneNumber;

};

Utility.bodauTiengViet = function(str){
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
};

Utility.searchProduct = function (key) {
    let self = this;
    key = self.bodauTiengViet(key);
    key = key.toUpperCase();
    let allProduct = self.getAllProduct();
    let allCategory = self.getCategory();
    let arr = [];
    for (let i = 0; i < allCategory.length; i++){
        let id = allCategory[i].id;

        let data = allProduct[id];

        for (let j =0; j < data.length; j++){
            let each = data[j];

            let name = self.bodauTiengViet(each.name);
            name = name.toUpperCase();
            let index = name.search(key);
            if(index >= 0){
                arr.push(each);
            }
        }
    }

    return arr;
};

export default Utility;