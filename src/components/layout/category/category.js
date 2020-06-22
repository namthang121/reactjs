import React from 'react';
import './style.css';
import Utility from "../../common/utility";
import {Link} from "react-router-dom";

export default class CategoryView extends React.Component {


    render() {
        return (

            <section className="page-breadcrumb">
                <ol className="breadcrumb">
                    <li><a href="/">Trang chủ </a></li>
                    <li className="active">{this.props.category.name}</li>
                </ol>
                <div className="row">
                    {
                        this.props.products.map((product)=>{
                            return(
                                <div className="owl-item">
                                    <div className="item-product">
                                        <div className="product-img">
                                            <Link to={'/san-pham/' + product.id}>
                                                <img className="set-item-img"
                                                     src={Utility.getUrlImage(product.image[0])}
                                                     alt={product.name +","+ product.id} /></Link>
                                        </div>
                                        <div className="caption">
                                            <a href={'/san-pham/' + product.id} className="name-product">{product.name}</a>
                                            {
                                                product.price === -1 ? <div><a  href="tel:0948296828" className="color-red">Liên Hệ</a></div> : <span className="color-red">{Utility.formatAmount(product.price)} ₫</span>
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        );
    }
}
