import React from 'react';
import './tab.css';
import Utility from '../../common/utility';

import {Link} from "react-router-dom";

// const styleTest = {
//     background: 'red'
// };

export default class tab extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="container">
                {
                    this.props.category.map((each, index) => {
                        return (
                            <div className="container tab col-md-12">
                                <div className="header-tab">
                                    <div className="title-section"><span>{each.name}</span></div>
                                    <span className="float-right set-tab-link"><Link to={"/danh-muc/" + each.id}>Xem chi tiết</Link></span>
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
                                                                <Link to={'/san-pham/' + product.id}><img className="set-item-img"
                                                                                src={Utility.getUrlImage(product.image[0])}
                                                                                alt={product.name +","+ product.id} /></Link>
                                                            </div>
                                                            <div className="caption">
                                                                <a href={'/san-pham/' + product.id} className="name-product">{product.name}</a>
                                                                <div className="price">
                                                                    {
                                                                        product.price === -1 ? <div><a href="tel:0948296828" className="amount">Liên Hệ</a></div> : <span className="amount">{Utility.formatAmount(product.price)} ₫</span>
                                                                    }
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
