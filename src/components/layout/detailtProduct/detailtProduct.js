import React from 'react';
import Utility from "../../common/utinity";
import './detailtProduct.css';

export default class DetailtProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {img : props.data.image[0]}
    }
    componentDidMount() {

    }

    changeImg(i){
        this.setState({img : i})
    }


    render() {
        return (
            <div className="row">
                <div className="page-breadcrumb col-md-12">
                    <ol className="breadcrumb">
                        <li><a href="/">Trang chủ </a></li>
                        <li className="active">{this.props.data.name}</li>
                    </ol>
                </div>
                <div className="row detail col-md-12">
                    <div className="col-lg-5 col-md-4 no-padding-right">
                        <div className="image-detail">
                            <div id="carousel-view-images" className="carousel slide" data-ride="carousel">
                                <div className="image-lag">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="item active">
                                            <img width="740" height="630"
                                                 src={Utility.getUrlImage(this.state.img)}
                                                 className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                 alt=""
                                                 sizes="(max-width: 740px) 100vw, 740px" /></div>
                                    </div>
                                </div>
                                <div className="img-thumbails">
                                    <div
                                        className="carousel-indicators2 owl-img-thumbail owl-carousel owl-theme">
                                        <div className="owl-wrapper-outer">
                                            <div className="owl-wrapper">
                                                {
                                                    this.props.data.image.map((i, index)=>{
                                                        return(
                                                            <div className="owl-item" onClick={()=> this.changeImg(i)}>
                                                                <div data-target="#carousel-view-images" data-slide-to="0"
                                                                     className="active item">
                                                                    <img width="740" height="630"
                                                                         src={Utility.getUrlImage(i)}
                                                                         className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                         sizes="(max-width: 740px) 100vw, 740px" /></div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="owl-controls clickable">
                                            <div className="owl-pagination">
                                                <div className="owl-page"><span className=""></span></div>
                                            </div>
                                            <div className="owl-buttons">
                                                <div className="owl-prev"></div>
                                                <div className="owl-next"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-8">
                        <div className="row">
                            <div className="col-lg-7 col-md-6">
                                <div className="entry-detail">
                                    <p className="title">{this.props.data.name}</p>
                                    <p></p>
                                    <p><b>Mã sản phẩm:</b></p>
                                    <p><b>Trạng thái:</b>
                                        <span className="t-blue"> Còn hàng</span></p>
                                    <p></p>
                                    <p className="price"><b>Giá bán:</b> {Utility.formatAmount(this.props.data.price)} ₫</p>
                                    <p className="price-old"><b>Giá thị trường:</b> <span>{Utility.formatAmount(this.props.data.oldPrice)}</span> ₫ </p>

                                    <div className="soluong">
                                        <span>Số lượng</span>
                                        <span className="in-prew" onClick="setCT('0')">-</span>
                                        <input type="" value="1" id="num_ssoluong" name="quantity"
                                               placeholder="" className="form-control" />
                                        <span className="in-next" >+</span>
                                    </div>
                                    <div className="option-btn pull-left">
                                        <button type="submit" className="btn-detail btn-them">Mua ngay</button>
                                    </div>
                                    <div className="share-face pull-left">
                                        <div className="addthis_native_toolbox"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 no-padding-left">
                                <div className="lien-he-tv">
                                    <div className="title">Liên hệ tư vấn</div>
                                    <div className="content-lien-he">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <p className="lh-thanh-pho"> Hotline :</p>
                                                <span className="lh-phone">
                                                    <a href="tel:0988318978">0988318978</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}