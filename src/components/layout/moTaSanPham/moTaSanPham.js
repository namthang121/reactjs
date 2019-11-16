import React from 'react';
import Utility from "../../common/utility";
import './style.css';

export default class MoTaSanPham extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {img : props.data.image[0]}
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


                                    <li className="list-group-item">
                                        <div className="item-product img_listpage">
                                            <div className="product-img">
                                                <a href="https://cuacuonkimthanhphat.com/san-pham/cua-cuon-cong-nghe-uc-l3/"><img
                                                    width="601" height="384"
                                                    src="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9.jpg"
                                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                    alt=""
                                                    srcSet="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9.jpg 601w, https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9-300x192.jpg 300w, https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9-600x384.jpg 600w"
                                                    sizes="(max-width: 601px) 100vw, 601px"/></a>
                                            </div>
                                            <div className="caption">
                                                <a className="name-product"
                                                   href="https://cuacuonkimthanhphat.com/san-pham/cua-cuon-cong-nghe-uc-l3/">Cửa
                                                    Cuốn Công Nghệ Úc L3 </a>
                                                <div className="price">
                                                    <span className="amount">520,000 ₫</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
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

                            <div className="tab-content">
                                {
                                    this.props.data.desc
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}