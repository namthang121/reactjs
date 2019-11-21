import React from 'react';
import Utility from "../../common/utility";
import './style.css';

export default class MoTaSanPham extends React.Component {
    constructor(props) {
        super(props);

        this.state = {product : Utility.getProductWithCategoryId(props.data.categoryId,props.data.id)}
    }
    componentDidMount() {

    }
    render() {
        return (
            <section className="row mo-ta">
                <div className="col-md-3 col-sm-3 sidebar">
                    <div className="box-sidebar">
                        <div className="panel sp-xem-nhieu">
                            <div className="panel-heading">
                                Sản phẩm liên quan
                            </div>
                            <ul className="list-group">
                                <ul className="products">
                                    {
                                        this.state.product.map((each)=>{
                                            return(
                                                <li className="list-group-item">
                                                    <div className="item-product img_listpage">
                                                        <div className="product-img">
                                                            <a href={"/san-pham/" + each.id}><img
                                                                width="601" height="384"
                                                                src={Utility.getUrlImage(each.image[0])}
                                                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                alt={each.name +","+ each.id}
                                                                sizes="(max-width: 601px) 100vw, 601px"/></a>
                                                        </div>
                                                        <div className="caption">
                                                            <a className="name-product"
                                                               href={"/san-pham/" + each.id}>{each.name}</a>
                                                            <div className="price">
                                                                <span className="amount">{Utility.formatAmount(each.price)} ₫</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 col-sm-9 main-right">
                    <div className="box-main-right">
                        <div role="tabpanel" className="tab-gioi-thieu-sp">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" id="detai-gioi-thieu1" className="active"><a
                                    href="#detai-gioi-thieu">Thông tin chi tiết</a></li>

                            </ul>

                            <div className="tab-content" dangerouslySetInnerHTML={{ __html: this.props.data.desc }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
