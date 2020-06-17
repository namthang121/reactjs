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
        this.setState({data: data, products: Utility.getProductWithCategoryId(id, "")});
    }

    render (){
        return(
            <div>
                <Helmet>
                    <title>{"Danh Mục | "+ this.state.data.name}</title>
                    <meta name="description" content={this.state.data.name}></meta>
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
