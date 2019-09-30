import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css';
import Utinity from '../../common/utinity';
import {returnStatement} from "@babel/types";

export default class tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
            {
                this.props.data.map((each, index) => {
                    return(
                        <div className="container tab col-md-12">
                            <div className="header-tab">
                                <div className="title-section"><span>{each.title}</span></div>
                                <span className="float-right set-tab-link"><a href="">Xem chi tiết</a></span>
                            </div>
                            {
                                each.data.map((item, i)=>{
                                    return(
                                        <div className="owl-item">
                                            <div className="item-product">
                                                <div className="product-img">
                                                    <a href=""><img className="set-item-img" src={item.img} /></a>
                                                </div>
                                                <div className="caption">
                                                    <a href="" className="name-product">{item.name}</a>
                                                    <div className="price">
                                                        <span className="amount">{Utinity.formatAmount(item.price)}₫</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
    }
}