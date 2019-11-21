import React from 'react';
import Header from '../layout/header/header';
import define from '../common/define';
import Utility from '../common/utility';
import "./main.css";
import Footer from "../layout/footer/footer";
import DetailtProduct from "../layout/detailtProduct/detailtProduct";
import MoTaSanPham from "../layout/moTaSanPham/moTaSanPham";
import {Helmet} from "react-helmet";

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
                <Helmet>
                    <title>{this.state.data.name}</title>
                    <meta name="description" content={Utility.getDescByKey(this.state.data,define.KEY_DESC) } />
                    <meta property="og:title" content={Utility.getDescByKey(this.state.data,define.KEY_DESC) } />
                    <meta property="og:description" content={Utility.getDescByKey(this.state.data,define.KEY_DESC) } />
                </Helmet>
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
