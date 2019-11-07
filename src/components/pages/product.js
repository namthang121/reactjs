import React from 'react';
import Header from '../layout/header/header';
import define from '../common/define';
import Utility from '../common/utinity';
import "./main.css";
import Footer from "../layout/footer/footer";
import DetailtProduct from "../layout/detailtProduct/detailtProduct";
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
                <div className="container show">
                    <DetailtProduct data={this.state.data}></DetailtProduct>
                </div>
                <Footer />
            </div>
        )
    };
}
