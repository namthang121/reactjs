import React from 'react';
import Header from '../layout/header/header';
import define from '../common/define';
import Utility from '../common/utility';
import "./main.css";
import Footer from "../layout/footer/footer";
import DetailtProduct from "../layout/detailtProduct/detailtProduct";
import MoTaSanPham from "../layout/moTaSanPham/moTaSanPham";
export default class Product extends React.Component{
    constructor(props){
        super(props);
        let {id} = props.match.params;
        let data = Utility.getProductById(id);
        this.state = {data: data};
    }

    render (){
        return(
            <div>
                <Header></Header>
                <div className="container show-detail-product">
                    <DetailtProduct data={this.state.data}></DetailtProduct>
                    <MoTaSanPham data={this.state.data}></MoTaSanPham>
                </div>
                <Footer />
            </div>
        )
    };
}
