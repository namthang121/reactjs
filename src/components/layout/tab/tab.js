import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css';
import Utinity from '../../common/utinity';
import {returnStatement} from "@babel/types";

// const styleTest = {
//     background: 'red'
// };

export default class tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {
                    this.props.category.map((each, index) => {
                        return (
                            <div className="container tab col-md-12">
                                <div className="header-tab">
                                    <div className="title-section"><span>{each.name}</span></div>
                                    <span className="float-right set-tab-link"><a href="">Xem chi tiết</a></span>
                                </div>
                                <div className="set-scroll-tab">
                                    <div style={{width: this.props.products[each.id].length * 234 + 'px'}}
                                         className="scroll-tab">
                                        {
                                            this.props.products[each.id].map((product, i) => {
                                                return (
                                                    <div className="owl-item">
                                                        <div className="item-product">
                                                            <div className="product-img">
                                                                <a href={'/product/' + product.id}><img className="set-item-img"
                                                                                src={Utinity.getUrlImage(product.image[0])}/></a>
                                                            </div>
                                                            <div className="caption">
                                                                <a href={'/product/' + product.id} className="name-product">{product.name}</a>
                                                                <div className="price">
                                                                    <span
                                                                        className="amount">{Utinity.formatAmount(product.price)}₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}