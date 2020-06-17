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
                    <meta name="description" content={"Khuyến Mãi Lớn từ 20 đến 35%\n" +
                    "Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828" + Utility.getDescByKey(this.state.data,define.KEY_DESC) } />
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
