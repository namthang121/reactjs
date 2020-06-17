import React from 'react';
import Header from '../layout/header/header';
import Utility from '../common/utility';
import "./main.css";
import Footer from "../layout/footer/footer";
import {Helmet} from "react-helmet";
import CategoryView from "../layout/category/category";

export default class Category extends React.Component{
    state = {
        data : {},
        products : []
    };

    componentDidMount() {
        let {id} = this.props.match.params;
        let data = Utility.getCategoryById(id);
        this.setState({data: data, products: Utility.getProductWithCategoryId(id, "")}) ;
    }

    render (){
        return(
            <div>
                <Helmet>
                    <title>{"Danh Mục | "+ this.state.data.name}</title>
                    <meta name="description" content={"Khuyến Mãi Lớn từ 20 đến 35%\n" +
                    "Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828" + this.state.data.name}></meta>
                </Helmet>
                <Header></Header>
                <div className="container">
                    <CategoryView category={this.state.data} products = {this.state.products}></CategoryView>
                </div>

                <Footer />
            </div>
        )
    };
}
